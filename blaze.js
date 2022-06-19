function getValue() {
    var blaze = document.querySelector('input').value;
    document.getElementById('convertion_usd').innerHTML = blaze.toString() / 2;
    console.log(blaze);
}