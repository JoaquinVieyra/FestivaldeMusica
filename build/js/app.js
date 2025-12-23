document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})
function crearGaleria() {
    const cantidadImagenes = 16;

    const galeria = document.querySelector('.galeria-imagenes')
    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen galeria';
        imagen.addEventListener('click', () => mostrarImagen(i));
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(i) {

    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'imagen galeria';



    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);

    const html = document.querySelector('body');
    html.classList.add('overflow-hidden');
    html.appendChild(modal);
}
function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut')

    setTimeout(() => {
        const html = document.querySelector('body');
        html.classList.remove('overflow-hidden');
        modal?.remove();

    }, 200);
}
function navegacionFija(){
    const header=document.querySelector('.header');
    const sobreFestival=document.querySelector('.sobre-festival');
    document.addEventListener('scroll', function(){
    if(sobreFestival.getBoundingClientRect().bottom<1){
        header.classList.add('fijo');
    }
    else{
         header.classList.remove('fijo');
    }
    })

}
function resaltarEnlace(){
    document.addEventListener('scroll',function(){
        const sections=document.querySelectorAll('section');
        const navLinks =document.querySelectorAll('.navegacion-principal a');
        let actual='';
        sections.forEach(section =>{
            const sectionTop=section.offsetTop;
            const sectionHeight=section.clientHeight;
            if (window.scrollY>=(sectionTop-sectionHeight/3)){
                actual=section.id;
            }
        })
        navLinks.forEach(link =>{
            link.classList.remove('active');
            if (link.getAttribute('href')==='#'+ actual){
                link.classList.add('active');
            }
        })

        
    })
}
function scrollNav(){
    const navLinks=document.querySelectorAll('.navegacion-principal a')
    navLinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault();
           const href= e.target.getAttribute('href');
           const section=document.querySelector(href);
           section.scrollIntoView({behavior:'smooth'});

        })
    })
}