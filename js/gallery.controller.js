'use strict'

function onInit() {
    renderGallery()
    renderCanvas()
}

function renderGallery() {
    const imgs = getImgsForDisplay()
    const strHtml = imgs.map(img =>
        `
        <img src="${img.url}" alt="image" onclick="onImgSelect(${img.id})" />
        `
    )

    document.querySelector('.gallery').innerHTML = strHtml.join('')
}