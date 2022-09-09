function prueba() {
    let e = 2**32;
    let h = crypto.getRandomValues(new Uint32Array(1))[0];
    let total = Math.floor((100*e-h) / (e-h)) / 100;
    console.log(total);
    document.getElementById("display").innerHTML = total;
};

setInterval(prueba, 1000);

setTimeout(() => {clearInterval(timerId)});
// function randNumberCrash(){
    
    // for (let i = 0; i <= 1; i ++) {
    //     setInterval(prueba(), 2000);
    //     }
        
        
//         // if (h % 50 == 0) return 1;
        
        
//     };
