//set date
const date = document.getElementById('date').innerHTML = new Date().getFullYear()

// nav toggle

const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')

// add eventlistner
navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links')
})