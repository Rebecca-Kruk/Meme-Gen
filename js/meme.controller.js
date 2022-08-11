'use strict'

var gElCanvas
var gCtx

function renderCanvas() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
}

// Render a meme on the canvas
function renderMeme() {
    const meme = getMeme()
    const lines = meme.lines[0]

    const img = new Image()
    img.src = getImgUrlById(meme.selectedImgId)

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderLineTxt(lines.txt, lines.size, lines.align, lines.color)
    }
}

function renderLineTxt(txt, size, align, color) {
    const width = gElCanvas.width / 2
    const height = gElCanvas.height / 10

    txt = (txt === '') ? 'Text Line' : txt
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 1
    gCtx.font = `${size}px impact`
    gCtx.fillStyle = color
    gCtx.fillText(txt, width, height)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, width, height)
    gCtx.closePath()
}

function onImgSelect(id) {
    onSetLineTxt('')
    onSetLineColor('#ffffff')
    setLineSize(50)
    setImg(id)
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