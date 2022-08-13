'use strict'

// move to Gallery Service
var gKeywordSearch = []

function onInit() {
    renderGallery()
    renderEditor()
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

        // move to Gallery Service
        if (txtValue.toUpperCase().includes(filter)) {
            if (filter === '') {
                document.querySelector('.search-list').hidden = true
            }

            values.push(txtValue.toLowerCase())
        }
    }

    // move to Gallery Service
    gKeywordSearch = values
    renderGallery()
}

function openGallery() {
    document.querySelector('.gallery').classList.add('flex')
    document.querySelector('.editor').classList.remove('flex')
    document.querySelector('.editor').hidden = true
}

function toggleMenu() {
    document.querySelector('.main-nav').classList.toggle('open')
}
