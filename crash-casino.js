function prueba() {
    let e = 2**32;
    let h = crypto.getRandomValues(new Uint32Array(1))[0];
    let total = Math.floor((100*e-h) / (e-h)) / 100;
    document.getElementById("display").innerHTML = total;
};

setInterval(prueba, 2000);

setTimeout(() => {clearInterval(timerId)});