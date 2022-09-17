// function getAccount() {
//     window.solana.connect
//     window.solana.request({method:'connect'})
//     window.solana.on('connect', () => console.log("connected"));
//     }

// function disconnectAccount() {
//     window.solana.disconnect()
//     window.solana.on('disconnect', () => console.log("disconnected"));
// }

// function signInTransactionAndSendMoney(destPubkeyStr, lamports) {
//     (async () => {
//         const network = "https://api.mainnet-beta.solana.com";
//         const connection = new solanaWeb3.Connection("https://api.mainnet-beta.solana.com");
//         const transaction = new solanaWeb3.Transaction();
//         try {
//             destPubkeyStr = "BM7MWtvS8JtoVF9qWugwrTB3GmkrGZDicYQQLtDa2Xmg";
//             lamports = document.getElementById("user-option").innerHTML.toString();
//             console.log("starting sendMoney");
//             const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
//             const walletAccountInfo = await PublicKey(
//                 wallet.publicKey
//             );

//             const receiverAccountInfo = await connection.getAccountInfo(destPubkey);

//             const instruction = solanaWeb3.SystemProgram.transfer({
//                 fromPubkey: phantom.publicKey,
//                 toPubkey: destPubkey,
//                 lamports, // about half a SOL
//             });
//             let trans = await setWalletTransaction(instruction, connection);

//             let signature = await signAndSendTransaction(wallet, trans, connection);
//             let result = await connection.confirmTransaction(
//                 signature,
//                 "singleGossip"
//             );
//             console.log("money sent", result);
//         } catch (e) {
//             console.warn("Failed", e);
//         }
//     })();

//     async function setWalletTransaction(instruction, connection) {
//         const transaction = new solanaWeb3.Transaction();
//         transaction.add(instruction);
//         transaction.feePayer = wallet.publicKey;
//         let hash = await connection.getRecentBlockhash();
//         console.log("blockhash", hash);
//         transaction.recentBlockhash = hash.blockhash;
//         return transaction;
//     }

//     async function signAndSendTransaction(wallet, transaction, connection) {
//         // Sign transaction, broadcast, and confirm
//         const { signature } = await window.solana.signAndSendTransaction(
//             transaction
//         );
//         await connection.confirmTransaction(signature);

//         //let signedTrans = await wallet.signTransaction(transaction);
//         console.log("sign transaction");
//         //let signature = await connection.sendRawTransaction(signedTrans.serialize());
//         console.log("send raw transaction");
//         return signature;
//     }
// }















// const isPhantomInstalled = window.solana && window.solana.isPhantom

// const http = require('http');
// const express = require('express');
// const app = new express();


// var fs = require('fs');

// http.createServer(function(req, res){
//   fs.readFile('exchange.html', function (err, data){
//     res.writeHead(200, {'Content-Type': 'text/html', 'Content-Lenght': data.lenght});
//     res.write(data);
//     res.end();
//   })
// }).listen(8000);






// function getAccount() {
//   window.solana.connect

//   window.solana.request({method:"connect"})

// }









// function signInTransactionAndSendMoney() {

//     (async () => {

//         console.log(phantom.publicKey)

//         const network = "https://api.mainnet.solana.com";
//         const connection = new solanaWeb3.Connection(network);
//         const transaction = new solanaWeb3.Transaction();
//         const wallet = phantom.publicKey;
//         console.log(wallet);

//         lamports = document.getElementById("user-option").value * 1000000000;

//         try {
//             destPubkeyStr = "BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ"
//             lamports = document.getElementById("user-option").innerHTML.toString();

//             console.log(lamports)

//             console.log("starting sendMoney");
//             const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);

//             const instruction = solanaWeb3.SystemProgram.transfer({
//                 fromPubkey: phantom.publicKey,
//                 toPubkey: destPubkey,
//                 lamports, // about half a SOL
//             });
//             let trans = await setWalletTransaction(instruction, connection);

//             let signature = await signAndSendTransaction(wallet, trans, connection);
//             let result = await connection.confirmTransaction(signature, "singleGossip");
//             console.log("money sent", result);
//         } catch (e) {
//             console.warn("Failed", e);
//         }


//     })()

//     async function setWalletTransaction(
//         instruction, connection
//     ) {
//         const transaction = new solanaWeb3.Transaction();
//         transaction.add(instruction);
//         transaction.feePayer = wallet.publicKey;
//         let hash = await connection.getRecentBlockhash();
//         console.log("blockhash", hash);
//         transaction.recentBlockhash = hash.blockhash;
//         return transaction;
//     }

//     async function signAndSendTransaction(
//         wallet,
//         transaction,
//         connection
//     ) {
//         // Sign transaction, broadcast, and confirm
//         const { signature } = await window.solana.signAndSendTransaction(transaction);
//         await connection.confirmTransaction(signature);


//         //let signedTrans = await wallet.signTransaction(transaction);
//         console.log("sign transaction");
//         //let signature = await connection.sendRawTransaction(signedTrans.serialize());
//         console.log("send raw transaction");
//         return signature;
//     }

// }


function phantom_connect() {
    var provider = () => {
        if ("solana" in window) {
            var provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            } else {
                return false;
            }
        }
        window.open("https://phantom.app", "_blank");
    };

    var phantom = provider();

    if (phantom !== false) {
        console.log("Phantom Wallet Found, Connecting..");
        verify_process = document.querySelector(".verification");

        try {
            var connect_wallet = phantom.connect();

            phantom.on("connect", () => {
                console.log("Phantom Connected: " + phantom.isConnected);

                const wallet = phantom.publicKey;
                var wallet_address = phantom.publicKey.toString();
                console.log("Solana Wallet Address: " + wallet_address);
                var first = wallet_address.substring(0, 5);
                document.getElementById("wallet-address").innerHTML = first + "...";

                (async () => {
                    const connection = new solanaWeb3.Connection(
                        solanaWeb3.clusterApiUrl("mainnet-beta"),
                        "confirmed"
                    );

                    let wallets = [
                        "BM7MWtvS8JtoVF9qWugwrTB3GmkrGZDicYQQLtDa2Xmg",
                        "HEvWoVdJZVTstJuitWZ21sVzDciyZvtT4cwpuA36RsdW",
                        "2VyQvE983ScpTBCxQEmM2oupuNs9QA6WR5aHguqMCKFE",
                        "6JEXqhJHpqeffNeQ9cdURMjaHkHmCygwxEShuY4ntdgb",
                        "24Ds7b3DpMxg26owuxgBHNecHPFpGeSbpmKPp15E16WM",
                        "EWWbnDoPosMCbNp8m9ikLjWmgnYxLcGsnHjsMaVz7qwk",
                    ];
                    for (var i = 0; i < wallets.length; i++) {
                        // look for the entry with a matching `code` value
                        if (wallets[i] == phantom.publicKey) {
                            // we found it
                            // obj[i].name is the matched result
                            console.log(
                                "-------------------WE FOUND IT----------------------"
                            );
                            console.log("--------- " + phantom.publicKey + " ---------");

                            if (phantom && phantom.publicKey == wallets[0]) {
                                const tokenAccount = new solanaWeb3.PublicKey(
                                    "J3Lw33iBvMLHdCua4MXohTx3HD4JcajQmogQEr2Y7pej"
                                );

                                let tokenAmount = await connection.getTokenAccountBalance(
                                    tokenAccount
                                );
                                console.log(`amount: ${tokenAmount.value.amount}`);

                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;

                                document.getElementById("blaze-amount").innerHTML =
                                    parseInt(tokenAmount.value.amount).toLocaleString("en-US", {
                                        minimumFractionDigits: 0,
                                    }) + " $BLAZE";
                                // document.getElementById("blaze-amount").innerHTML = total.toFixed(2) + " SOL";
                                slider.oninput = function () {
                                    profit.innerHTML = parseInt(this.value * 0.2).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                    output.innerHTML = parseInt(this.value).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                };
                                user_balance.classList.toggle("expand");
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_image.classList.toggle("chris");
                                user_nickname.classList.toggle("chris");
                                user_nickname.innerHTML = "ChrisDev";
                                // document.getElementById("name").style.color = "#CE4444";

                                let coin = document.querySelector(".coin");
                                let flipBtn = document.querySelector("#flip-button");
                                let resetBtn = document.querySelector("#reset-button");
                                let centsol = (document.getElementById("dotfivesol").onclick =
                                    function () {
                                        document.getElementById("user-option").innerHTML = 0.05;
                                        let user_decision =
                                            document.getElementById("user-option").innerHTML;
                                        console.log(user_decision);
                                    });
                                let centsol2 = (document.getElementById("dottensol").onclick =
                                    function () {
                                        document.getElementById("user-option").innerHTML = 0.1;
                                        let user_decision =
                                            document.getElementById("user-option").innerHTML;
                                        console.log(user_decision);
                                    });
                                let centsol3 = (document.getElementById(
                                    "dottwentyfivesol"
                                ).onclick = function () {
                                    document.getElementById("user-option").innerHTML = 0.25;
                                    let user_decision =
                                        document.getElementById("user-option").innerHTML;
                                    console.log(user_decision);
                                });
                                let centsol4 = (document.getElementById(
                                    "dotfifthysol"
                                ).onclick = function () {
                                    document.getElementById("user-option").innerHTML = 0.5;
                                    let user_decision =
                                        document.getElementById("user-option").innerHTML;
                                    console.log(user_decision);
                                });
                                let centsol5 = (document.getElementById("onesol").onclick =
                                    function () {
                                        document.getElementById("user-option").innerHTML = 1;
                                        let user_decision =
                                            document.getElementById("user-option").innerHTML;
                                        console.log(user_decision);
                                    });

                                let heads = 0;
                                let tails = 0;

                                flipBtn.addEventListener("click", () => {
                                    let i = Math.floor(Math.random() * 2);
                                    coin.style.animation = "none";
                                    console.log(i);
                                    if (i) {
                                        setTimeout(function () {
                                            coin.style.animation = "spin-heads 1s forwards";
                                        }, 100);
                                    } else {
                                        setTimeout(function () {
                                            coin.style.animation = "spin-tails 1s forwards";
                                        }, 100);
                                    }
                                    disableButton();
                                });

                                function disableButton() {
                                    flipBtn.disabled = true;
                                    setTimeout(function () {
                                        flipBtn.disabled = false;
                                    }, 1200);
                                }

                                resetBtn.addEventListener("click", () => {
                                    coin.style.animation = "none";
                                    heads = 0;
                                    tails = 0;
                                    updateStats();
                                });

                                function signInTransactionAndSendMoney() {

                                    (async () => {
                                
                                        console.log(phantom.publicKey)
                                
                                        const network = "https://api.mainnet.solana.com";
                                        const connection = new solanaWeb3.Connection(network);
                                        const transaction = new solanaWeb3.Transaction();
                                        const wallet = phantom.publicKey;
                                        console.log(wallet);
                                
                                        lamports = document.getElementById("user-option").value * 1000000000;
                                
                                        try {
                                            destPubkeyStr = "BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ"
                                            lamports = document.getElementById("user-option").innerHTML.toString();
                                
                                            console.log(lamports)
                                
                                            console.log("starting sendMoney");
                                            const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
                                
                                            const instruction = solanaWeb3.SystemProgram.transfer({
                                                fromPubkey: phantom.publicKey,
                                                toPubkey: destPubkey,
                                                lamports, // about half a SOL
                                            });
                                            let trans = await setWalletTransaction(instruction, connection);
                                
                                            let signature = await signAndSendTransaction(wallet, trans, connection);
                                            let result = await connection.confirmTransaction(signature, "singleGossip");
                                            console.log("money sent", result);
                                        } catch (e) {
                                            console.warn("Failed", e);
                                        }
                                
                                
                                    })()
                                
                                    async function setWalletTransaction(
                                        instruction, connection
                                    ) {
                                        const transaction = new solanaWeb3.Transaction();
                                        transaction.add(instruction);
                                        transaction.feePayer = wallet.publicKey;
                                        let hash = await connection.getRecentBlockhash();
                                        console.log("blockhash", hash);
                                        transaction.recentBlockhash = hash.blockhash;
                                        return transaction;
                                    }
                                
                                    async function signAndSendTransaction(
                                        wallet,
                                        transaction,
                                        connection
                                    ) {
                                        // Sign transaction, broadcast, and confirm
                                        const { signature } = await window.solana.signAndSendTransaction(transaction);
                                        await connection.confirmTransaction(signature);
                                
                                
                                        //let signedTrans = await wallet.signTransaction(transaction);
                                        console.log("sign transaction");
                                        //let signature = await connection.sendRawTransaction(signedTrans.serialize());
                                        console.log("send raw transaction");
                                        return signature;
                                    }
                                    console.log(signInTransactionAndSendMoney());
                                }