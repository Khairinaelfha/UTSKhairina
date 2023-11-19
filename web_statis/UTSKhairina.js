alert('Hi, Welcome to Our Shop')

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onsroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function updateTotal() {
    var cartTable = document.querySelectorAll("#shopping-cart tbody");
    var rows = cartTable.getElementsByTagName("tr");
    var total = 0;

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var price = parseFloat(row.cells[1].innerHTML);
        var quantity = parseFloat(row.cells[2].innerHTML);
        var rowTotal = price * quantity;
        row.cells[3].innerHTML = rowTotal.toFixed(2);
        total += rowTotal;
    }

    document.getElementById("total-price").innerHTML = total.toFixed(2);
}