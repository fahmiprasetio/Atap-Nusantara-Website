// PUNYA NAVBAR
const navbarItems = document.querySelectorAll('.navbar li');

navbarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // nge adain blur buat item yang lagi ngga dihover 
        navbarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('blur');
            }
        });
    });

    // buat ngilangin blur pas ngga dihover
    item.addEventListener('mouseleave', () => {
        navbarItems.forEach(otherItem => {
            otherItem.classList.remove('blur');
        });
    });
});




window.addEventListener('scroll', function() {
    var image = document.querySelector('.parallax-image');
    var scrollPosition = window.scrollY;
    var opacity = 1 - scrollPosition / 350; // Menentukan kecepatan transparansi
    
    if (opacity < 0) {
      opacity = 0; // Jangan biarkan gambar menjadi sepenuhnya transparan
    }
  
    image.style.opacity = opacity;
  });
  

