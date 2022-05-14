function rotate() {
    const nameElement = document.getElementById('name');
    const nav1 = document.getElementById('nav1');
    const nav2 = document.getElementById('nav2');
    const nav3 = document.getElementById('nav3');
    const nav4 = document.getElementById('nav4');


    nameElement.classList.add('rotateOut');
    nav1.classList.add('rotateIn');
    nav2.classList.add('rotateIn');
    nav3.classList.add('rotateIn');
    nav4.classList.add('rotateIn');
}
