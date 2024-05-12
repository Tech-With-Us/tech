function changeMode(mode) {

    let target = document.getElementById('mode')
    let imgList = target.querySelectorAll('img')
    imgList.forEach(img => {
        img.classList.toggle('hide-now')
    })
    target.classList.toggle('hello')
    target.classList.toggle('dark-mode')

    let mainBG = document.getElementById('cont')
    mainBG.classList.toggle('dark-bg')


    let monitorBg = document.querySelector('.monitor')
    monitorBg.classList.toggle('item-bg')
    let contentBg = document.querySelector('.web-m')
    contentBg.classList.toggle('item-bg')
    let contents = document.querySelectorAll('.web-f')
    contents.forEach(c => {
        c.classList.toggle('content-bg')
    })
}