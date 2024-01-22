const saudacao = 'document.querySelector("#saudacao");'
console.log(saudacao);

const btnHtml = document.querySelector('#html')
const tecnologiaHtml = document.querySelector('#tecnologias-html')

const btnCss = document.querySelector('#css')
const tecnologiaCss = document.querySelector('#tecnologias-css')

const btnJs = document.querySelector('#js')
const tecnologiaJs = document.querySelector('#tecnologias-js')

const btnReact = document.querySelector('#react')
const tecnologiaReact = document.querySelector('#tecnologias-react')



btnHtml.addEventListener('click', () =>{
    if (tecnologiaHtml.style.display == 'none') {
        tecnologiaHtml.style.display = 'block'
    } else {
        tecnologiaHtml.style.display = 'none'
    }
})

btnCss.addEventListener('click', () =>{
    if (tecnologiaCss.style.display == 'none') {
        tecnologiaCss.style.display = 'block'
    } else {
        tecnologiaCss.style.display = 'none'
    }
})

btnJs.addEventListener('click', () =>{
    if (tecnologiaJs.style.display == 'none') {
        tecnologiaJs.style.display = 'block'
    } else {
        tecnologiaJs.style.display = 'none'
    }
})

btnReact.addEventListener('click', () =>{
    if (tecnologiaReact.style.display == 'none') {
        tecnologiaReact.style.display = 'block'
    } else {
        tecnologiaReact.style.display = 'none'
    }
})