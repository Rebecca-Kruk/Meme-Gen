'use strict'

var gElCanvas
var gCtx
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function renderEditor() {
    // resizeCanvas()
    renderCanvas()
    // addListeners()
}

function renderCanvas() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
}

function renderMeme() {
    const meme = getMeme()
    const lines = meme.lines

    const img = new Image()
    img.src = getImgUrlById(meme.selectedImgId)

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

        for (let i = 0; i < lines.length; i++) {
            const { txt, size, align, color } = lines[i]
            renderLineTxt(txt, size, align, color, i)
            // renderLineTxt(lines[i].txt, lines[i].size, lines[i].align, lines[i].color, i)
        }
    }
}

function renderLineTxt(txt, fontSize, align, color, lineIdx) {
    // text variables
    const txtX = gElCanvas.width / 2
    let txtY

    // fix idx line order - when line deleted other lines move according to array index order
    if (lineIdx === 0) txtY = gElCanvas.height / 10
    else if (lineIdx === 1) txtY = gElCanvas.height / 1.1
    else txtY = gElCanvas.height / 2
    // the same:
    // if (lineIdx === 0) txtY = gElCanvas.height / 10
    // if (lineIdx === 1) txtY = gElCanvas.height / 1.1
    // if (lineIdx >= 2) txtY = gElCanvas.height / 2

    txt = (txt === '') ? 'Text Line' : txt

    // draw text
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 1
    gCtx.font = fontSize + 'px impact'
    gCtx.fillStyle = color
    gCtx.fillText(txt, txtX, txtY)
    gCtx.setLineDash([])
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, txtX, txtY)
    gCtx.closePath()

    // rectangle(border) variables
    // const rectX = txtX / 2   // works only with 400px canvas
    const rectY = txtY - (fontSize / 1.5)
    // const rectWidth = gCtx.measureText(txt).width * 1.1   // use only when I find a solution for variable - rectX
    const rectHeight = fontSize * 1.3

    // draw rectangle - border
    if (getMeme().selectedLineIdx === lineIdx) {
        // gCtx.fillStyle = 'rgb(227, 168, 30, 0.3)'
        // gCtx.fillRect(0, rectY, gElCanvas.width, rectHeight)
        gCtx.setLineDash([5, 15])
        gCtx.strokeRect(0, rectY, gElCanvas.width, rectHeight)
        // gCtx.strokeRect(rectX, rectY, rectWidth, rectHeight)   // need a solution for variable - rectX
    }
}

function renderRect() {
    // separate the Rectangle from renderLineTxt()
}

function onImgSelect(id) {
    setImg(id)
    getMeme().lines = []
    // onSetLineTxt('')
    // onSetLineColor('#ffffff')
    // setLineSize(50)
    renderMeme()
}

function onSetLineTxt(txt) {
    document.getElementById('text').value = txt
    setLineTxt(txt)
    renderMeme()
}

function onSetLineColor(color) {
    document.getElementById('color').value = color
    setLineColor(color)
    renderMeme()
}

function onChangeLineSize(num) {
    setLineSize(getSelectedLine().size + num)
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    onSetLineTxt(getSelectedLine().txt)
    onSetLineColor(getSelectedLine().color)
}

function onAddLine() {
    addLine()
    onSwitchLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    if (getMeme().lines.length !== 0) onSwitchLine()
    renderMeme()
}

// function onMoveLine(num) {

// }




// DRAG and DROP

// function resizeCanvas() {
//     const elContainer = document.querySelector('canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {
//         resizeCanvas()
//         renderMeme()
//     })
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!isLineClicked(pos)) return
//     setLineDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }

// function onMove(ev) {
//     const line = getSelectedLine()
//     if (!line.isDrag) return
//     const pos = getEvPos(ev)
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveLine(dx, dy)
//     gStartPos = pos
//     renderMeme()
// }

// function onUp() {
//     setLineDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }

//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft,
//             y: ev.pageY - ev.target.offsetTop
//         }
//     }

//     return pos
// }