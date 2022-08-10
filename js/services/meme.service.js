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
            txt: 'Text Line',
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

function getImgUrlById(id) {
    return gImgs.find(img => id === img.id).url
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
    console.log(gMeme.lines[0].txt);
}

function setImg(id) {
    
}

