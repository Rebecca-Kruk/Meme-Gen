'use strict'

// move to Gallery Service
var gKeywordSearch = []

function onInit() {
    renderGallery()
    renderEditor()
    loadMemesFromStorage()
}

function renderGallery() {
    const imgs = getImgsForDisplay()
    const filteredImgs = (gKeywordSearch.length) ? imgs.filter(img =>
        img.keywords.some(keyword =>
            gKeywordSearch.includes(keyword)
        )
    ) : imgs

    const strHtml = filteredImgs.map(img =>
        `
        <img src="${img.url}" alt="image" onclick="onImgSelect(${img.id})" />
        `
    )

    document.querySelector('.gallery').innerHTML = strHtml.join('')
}

function onKeywordSearch() {
    document.querySelector('.search-list').hidden = false
    const filter = document.getElementById('search-input').value.toUpperCase()
    const li = document.querySelectorAll('.search-list li')
    const values = []

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0]
        const txtValue = a.textContent || a.innerText

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none'
        }

        if (txtValue.toUpperCase().includes(filter)) {
            if (filter === '') {
                document.querySelector('.search-list').hidden = true
            }

            // move to Gallery Service
            values.push(txtValue.toLowerCase())
        }
    }

    // move to Gallery Service
    gKeywordSearch = values
    renderGallery()
}

function onSelectKeyword(keyword) {
    selectKeyword(keyword)
    document.getElementById('search-input').value = keyword
    document.querySelector('.search-list').hidden = true
    renderGallery()
}

// move to Gallery Service
function selectKeyword(keyword) {
    gKeywordSearch = [keyword]
}

function onDisplayGallery() {
    document.querySelector('.gallery').classList.add('flex')
    document.querySelector('.editor').classList.remove('flex')
    document.querySelector('.editor').hidden = true
    document.querySelector('.saved-memes').classList.remove('flex')
    document.querySelector('.saved-memes').hidden = true
    document.querySelector('.search-box').hidden = false
}

function toggleMenu() {
    document.querySelector('.main-nav').classList.toggle('open')
}

// saved memes controller
function onDisplaySavedMemes() {
    document.querySelector('.gallery').classList.remove('flex')
    document.querySelector('.gallery').hidden = true
    document.querySelector('.editor').classList.remove('flex')
    document.querySelector('.editor').hidden = true
    document.querySelector('.search-box').hidden = true
    document.querySelector('.saved-memes').classList.add('flex')
    // renderSavedMemes()
}

function renderSavedMemes() {
    gMeme = gMemes[1]
    // gCtx.restore()

    // gElCanvas = document.querySelector('#saved-canvas')
    // WIP :
    // var sourceCanvas = gElCanvas
    // var destinationCanvas = document.getElementById('saved-canvas')
    // var destCtx = destinationCanvas.getContext('2d')
    // destCtx.drawImage(sourceCanvas, 0, 0)

    // gMeme = gMemes[1]
    // var sourceCanvas = gElCanvas
    // var destinationCanvas = document.getElementById('saved-canvas2')
    // var destCtx = destinationCanvas.getContext('2d')
    // destCtx.drawImage(sourceCanvas, 0, 0)

    // gMeme = gMemes[2]
    // var sourceCanvas = gElCanvas
    // var destinationCanvas = document.getElementById('saved-canvas3')
    // var destCtx = destinationCanvas.getContext('2d')
    // destCtx.drawImage(sourceCanvas, 0, 0)

    // gMeme = gMemes[3]
    // var sourceCanvas = gElCanvas
    // var destinationCanvas = document.getElementById('saved-canvas4')
    // var destCtx = destinationCanvas.getContext('2d')
    // destCtx.drawImage(sourceCanvas, 0, 0)

    renderMeme()
}




