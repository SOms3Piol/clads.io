const btn = document.getElementById('mbl-button')
const menu = document.getElementById('mbl-menu')

btn.addEventListener('click' , ()=>{
    menu.classList.toggle('open');
})