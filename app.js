const navSlide= () =>{
    const burguer = document.querySelector('.menu-burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-header ul li');

    burguer.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
   
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
    });
    //Burguer Animation
    burguer.classList.toggle('toggle');
});


}
navSlide();

