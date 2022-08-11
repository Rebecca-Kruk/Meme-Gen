'use strict'

var gKeywoedSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'meme-imgs(square)/1.jpg', keywords: ['politics', 'cat'] },
    { id: 2, url: 'meme-imgs(square)/2.jpg', keywords: ['animal', 'dog'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'white'
        }
    ]
}

// Images for Display
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
    gMeme.lines[0].txt = txt
    console.log(gMeme.lines[0].txt);
}

function setLineColor(color) {
    gMeme.lines[0].color = color
}

function setLineSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size = size
}

