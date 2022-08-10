'use strict'

var gElCanvas
var gCtx

function renderCanvas() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
}

// Render a meme on the canvas
function renderMeme(id) {
    const meme = getMeme()
    meme.selectedImgId = id
    const lines = meme.lines[0]

    const img = new Image()
    img.src = getImgUrlById(id)

    img.onload = () => {
        renderImg(img)
        renderLineTxt(lines.txt, lines.size, lines.align, lines.color)
    }
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderLineTxt(txt, size, align, color) {
    const width = gElCanvas.width / 2
    const height = gElCanvas.height / 10

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

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme(getMeme().selectedImgId)
}

function onImgSelect(id) {
    setImg(id)
    renderMeme(getMeme().selectedImgId)
}
