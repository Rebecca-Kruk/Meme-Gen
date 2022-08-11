'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['politics', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animal', 'dog'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        // {
        //     txt: '',
        //     size: 50,
        //     align: 'center',
        //     color: '#ffffff',
        //     // pos: {offsetX, offsetY},
        //     isDrag: false
        // }
    ]
}

function getImgsForDisplay() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function getSelectedLine() {
    console.log(gMeme.selectedLineIdx);
    console.log(gMeme.lines);
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
    gMeme.lines.push({
        txt: '',
        size: 50,
        align: 'center',
        color: '#ffffff',
        // pos: {offsetX, offsetY},
        isDrag: false
    })
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}


// DRAG and DROP

// function isLineClicked(clickedPos) {
//     const { pos } = getSelectedLine()
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pox.y - clickedPos.y) ** 2)
//     return distance <= getSelectedLine().size
// }

// function setLineDrag(isDrag) {
//     getSelectedLine().isDrag = isDrag
// }

// function moveLine(dx, dy) {
//     getSelectedLine().pos.x += dx
//     getSelectedLine().pos.y += dy
// }
