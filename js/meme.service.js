'use strict'

var gKeywordSearchCountMap = { 'politics': 3, 'smile': 5, 'animal': 3, 'cat': 1, 'dog': 2, 'baby': 4, 'movie': 6, 'cartoon': 1, 'men': 11 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['politics', 'men'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animal', 'dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['animal', 'dog', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['animal', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['men'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['movie', 'smile', 'men'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'smile'] },
    { id: 10, url: 'img/10.jpg', keywords: ['politics', 'smile', 'men'] },
    { id: 11, url: 'img/11.jpg', keywords: ['men'] },
    { id: 12, url: 'img/12.jpg', keywords: ['men'] },
    { id: 13, url: 'img/13.jpg', keywords: ['movie', 'smile', 'men'] },
    { id: 14, url: 'img/14.jpg', keywords: ['movie', 'men'] },
    { id: 15, url: 'img/15.jpg', keywords: ['movie', 'men'] },
    { id: 16, url: 'img/16.jpg', keywords: ['movie', 'smile', 'men'] },
    { id: 17, url: 'img/17.jpg', keywords: ['politics', 'men'] },
    { id: 18, url: 'img/18.jpg', keywords: ['movie', 'cartoon'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            // pos: { x: 200, y: 40 },
            // txt: '',
            // size: 50,
            // align: 'center',
            // font: 'impact',
            // color: '#ffffff',
            // strokeColor: '#000000',
            // isDrag: false
        }
    ]
}

function getImgsForDisplay() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getImgUrlById(id) {
    return gImgs.find(img => id === img.id).url
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setLineTxt(txt) {
    getSelectedLine().txt = txt
}

function setLineColor(color) {
    getSelectedLine().color = color
}

function setLineSize(size) {
    getSelectedLine().size = size
}

function switchLine() {
    gMeme.selectedLineIdx++

    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}

function addLine() {
    const txtX = gElCanvas.width / 2
    let txtY

    if (gMeme.lines.length === 0) txtY = gElCanvas.height / 10
    else if (gMeme.lines.length === 1) txtY = gElCanvas.height / 1.1
    else txtY = gElCanvas.height / 2

    gMeme.lines.push({
        pos: { x: txtX, y: txtY },
        txt: '',
        size: 50,
        align: 'center',
        font: 'impact',
        color: '#ffffff',
        strokeColor: '#000000',
        isDrag: false
    })
}


function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function moveLine(num) {
    getSelectedLine().pos.y -= num
}

function setLineAlign(align) {
    getSelectedLine().align = align
}

function setLineFont(font) {
    getSelectedLine().font = font
}

function setLineStrokeColor(strokeColor) {
    getSelectedLine().strokeColor = strokeColor
}