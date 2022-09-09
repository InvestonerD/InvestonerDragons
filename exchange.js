
function drop() {
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
        });
    });
});
};

function getValue() {
    var currency = document.querySelector('input').value;
    document.getElementById("usd_value").innerHTML = currency.toString() / 2;
    document.getElementById("usd_value1").innerHTML = currency.toString() / 2;
    var total = parseFloat(currency / 33).toFixed(2) / 2;
    const last = document.getElementById('total_amount').innerHTML = total;
};