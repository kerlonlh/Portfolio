const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const mobileNavbarItems = document.querySelectorAll('.navbar__mobile a');
const button = document.querySelector('.burguer');
const bttn = document.querySelector('.button-burguer');


button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active')
    button.classList.toggle('active')
})

mobileNavbarItems.forEach( function (button){
    button.addEventListener('click', function () {
        mobileNavbar.classList.remove('active')
    })
})



mobileNavbarItems.forEach(function (bttn){
    bttn.addEventListener('click', function(){
        button.classList.remove('active')
    })
})

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active')
})


