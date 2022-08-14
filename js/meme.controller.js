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
            const { pos, txt, size, align, font, color, strokeColor } = lines[i]
            renderLineTxt(pos, txt, size, align, font, color, strokeColor, i)
        }
    }
}

function renderLineTxt(pos, txt, fontSize, align, fontFamily, color, strokeColor, lineIdx) {
    // text variables
    const [txtX, txtY] = [pos.x, pos.y]
    txt = (txt === '') ? 'Text Line' : txt

    // draw text
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 1
    gCtx.font = `${fontSize}px ${fontFamily}`
    gCtx.fillStyle = color
    gCtx.fillText(txt, txtX, txtY)
    gCtx.setLineDash([])
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(txt, txtX, txtY)
    gCtx.closePath()

    // rectangle(border) variables
    // const rectX = txtX / 2   // works only with 400px canvas
    const rectY = txtY - (fontSize / 1.5)
    // const rectWidth = gCtx.measureText(txt).width * 1.1   // use only when I find a solution for variable - rectX
    const rectHeight = fontSize * 1.3

    // draw rectangle - border
    if (getMeme().selectedLineIdx === lineIdx) {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.setLineDash([5, 15])
        gCtx.strokeRect(0, rectY, gElCanvas.width, rectHeight)
        // gCtx.strokeRect(rectX, rectY, rectWidth, rectHeight)   // need a solution for variable - rectX
    }
}

function renderRect() {
    // separate the Rectangle from renderLineTxt()
}

function onImgSelect(id) {
    document.querySelector('.gallery').classList.remove('flex')
    document.querySelector('.gallery').hidden = true
    document.querySelector('.editor').classList.add('flex')
    setImg(id)
    getMeme().lines = []
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
    onSetLineStrokeColor(getSelectedLine().strokeColor)
    onSetLineFont(getSelectedLine().font)
    renderMeme()
}

function onAddLine() {
    addLine()
    onSwitchLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    if (getMeme().lines.length > 0) onSwitchLine()
    renderMeme()
}

function onMoveLine(num) {
    moveLine(num)
    renderMeme()
}

function onSetLineAlign(align) {
    setLineAlign(align)
    renderMeme()
}

function onSetLineFont(font) {
    document.querySelector(`[value=${font}]`).selected = 'selected'
    setLineFont(font)
    renderMeme()
}

function onSetLineStrokeColor(strokeColor) {
    document.getElementById('stroke-color').value = strokeColor
    setLineStrokeColor(strokeColor)
    renderMeme()
}

function onOpenPallete(id) {
    document.getElementById(id).click()
}