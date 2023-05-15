
// import './modal';
// import modal from './modal'

export default function fontsize() {
    let phone = document.querySelectorAll('.header .phone')
    // const headerLine = document.querySelector('.header .header-line')
    // const header = document.querySelector('.header');
    // console.log(header.offsetWidth)
    // headerLine.style.setProperty('height', String(header.offsetWidth * 0.03) + 'px')
    phone.forEach(pho => {
        const computedStyle = getComputedStyle(pho);
        // const fs = pho.parentElement.offsetWidth > 719 ? pho.parentElement.offsetWidth * 0.04 : pho.parentElement.offsetWidth * 0.03
        // pho.style.setProperty('font-size', String(fs + 'px'))
        pho.style.setProperty('padding-left', String(pho.parentElement.offsetWidth * 0.02 + 'px'))
        pho.style.setProperty('padding-right', String(pho.parentElement.offsetWidth * 0.02 + 'px'))
        pho.style.paddingRight = pho.parentElement.offsetWidth * 0.01
    })
    let phonesvg = document.querySelectorAll('.header__line svg')
    phonesvg.forEach(pho => {
        pho.style.setProperty('height', String(pho.parentElement.offsetHeight * 0.8 + 'px'))

    })
    let ourproducts = document.querySelector('.our-products');
    let main = document.querySelector('main');
    ourproducts.style.setProperty('font-size', String(main.offsetWidth * 0.04 + 'px'))
    let block = document.querySelectorAll('main .info');
    let text = document.querySelectorAll('main .info span');
    let pixels = document.querySelectorAll('main .info .pixel');
    let titleblock = document.querySelector('main .sections')
    let title = document.querySelector('main .sections p')
    title.style.setProperty('font-size', String(titleblock.offsetWidth / 58 + 'px'))
    let noavansblock = document.querySelector('main .title')
    noavansblock.style.setProperty('margin-top', String(noavansblock.offsetWidth * 0.03 + 'px'))
    let noavans = document.querySelector('main .title .no-avans')
    noavans.style.setProperty('font-size', String(noavansblock.offsetWidth / 28 + 'px'))
    noavans.style.setProperty('margin-top', String(noavansblock.offsetWidth / 10 + 'px'))
    noavans.style.setProperty('margin-right',String(noavansblock.offsetWidth *0.1 + 'px'))

    block.forEach((info) => {
        let w = info.offsetWidth;
        info.style.setProperty('margin-left', String(w * 0.25 + 'px'))

        text.forEach((span) => {
            span.style.setProperty('font-size',String(w / 12 + "px"))
            span.style.setProperty('top',String(w / 10 + "px"))
            span.style.setProperty('margin-left', String(w / 10 + "px"))

        })
        pixels.forEach((pixel) => {
            pixel.style.setProperty('width', String(w / 24 + "px"))
            pixel.style.setProperty('height', String(w / 22 + "px"))

        })
    })
    // let button = document.querySelector('.callme');
    // button.style.setProperty('margin-top', String(noavansblock.offsetWidth * 0.1 + 'px'))
    // button.style.setProperty('width', String(noavansblock.offsetWidth * 0.52 + 'px'))
    // button.style.setProperty('height', String(noavansblock.offsetWidth * 0.14 + 'px'))
    // button.style.setProperty('font-size', String(button.offsetWidth * 0.07 + 'px'))
    // button.style.setProperty('right', String(button.offsetWidth * 0.007 + 'px'))
    // let skidkabutton = document.querySelector('.skidka-button');
    // skidkabutton.style.setProperty('margin-top', String(noavansblock.offsetWidth * 0.2 + 'px'))
    // skidkabutton.style.setProperty('width', String(noavansblock.offsetWidth * 0.54 + 'px'))
    // skidkabutton.style.setProperty('height', String(noavansblock.offsetWidth * 0.14 + 'px'))
    // skidkabutton.style.setProperty('font-size', String(noavansblock.offsetWidth * 0.14 + 'px'))
    // skidkabutton.style.setProperty('font-size', String(button.offsetWidth * 0.07 + 'px'))
    let skidka = document.querySelectorAll('.skidka')
    skidka.forEach(ski => {
        ski.style.setProperty('font-size', String(ski.parentElement.offsetWidth * 0.05 + 'px'))
    })
    // const footertitle = document.querySelector('footer .title')
    // footertitle.style.setProperty('font-size', String(footertitle.parentElement.offsetWidth * 0.025 + 'px'))
    // const contactstitle = document.querySelectorAll('footer .p-title')
    // contactstitle.forEach(title => {
    //     title.style.setProperty('font-size', String(String(Number(getComputedStyle(footertitle).fontSize.split('px')[0])-4) + 'px'))
    //
    // })
    // const computedStyle = getComputedStyle(contactstitle[0]);
    // const contactsp = document.querySelectorAll('footer .p-footer')
    // contactsp.forEach(title => {
    //     title.style.setProperty('font-size', String(Number(computedStyle.fontSize.split('px')[0])-4)+ 'px')
    //
    // })

}


// window.addEventListener('DOMContentLoaded', () => {
//     modal();
// });


