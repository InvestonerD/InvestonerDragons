
const LAMPORTS_PER_SOL = "@solanaWeb3.js"

const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    conn = document.querySelector(".connect"),
    disconn = document.querySelector(".disconnect"),
    user_balance = document.querySelector(".bottom-menu");
    phone_balance = document.querySelector("#b_phone");
    phone_balanceoff = document.querySelector("#bo_phone");
    phone_menuoff = document.querySelector("#bo_menu");
    phone_menu = document.querySelector("#s_phone");
    balances = document.querySelector(".balances");
    security = document.querySelector(".security");
    verify_process = document.querySelector(".verification");
    user_image = document.querySelector(".user_image");
    user_nickname = document.querySelector(".user-nickname");
    whale = document.querySelector(".whale-tier");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

disconn.addEventListener("click", () => {
    user_balance.classList.toggle("expand");
});

phone_balance.addEventListener("click", () => {
    balances.classList.toggle("phone");
});

phone_balanceoff.addEventListener("click", () => {
    balances.classList.toggle("phone");
});

phone_menu.addEventListener("click", () => {
    sidebar.classList.toggle("phone");
});

phone_menuoff.addEventListener("click", () => {
    sidebar.classList.toggle("phone");
});

function exchange() {
    window.open("https://app.strataprotocol.com/swap/3J358F8u94c6VB4vz9fT3AwpbWEZh7A4yddinTvoaqeb?cluster=mainnet-beta");
}

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
                
                
                const connection = new solanaWeb3.Connection("https://api.mainnet-beta.solana.com");
                
                
                (async () => {
                    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"),
                    'confirmed',
                    );




                    let wallets = ["BM7MWtvS8JtoVF9qWugwrTB3GmkrGZDicYQQLtDa2Xmg", "HEvWoVdJZVTstJuitWZ21sVzDciyZvtT4cwpuA36RsdW", "2VyQvE983ScpTBCxQEmM2oupuNs9QA6WR5aHguqMCKFE", "6JEXqhJHpqeffNeQ9cdURMjaHkHmCygwxEShuY4ntdgb", "24Ds7b3DpMxg26owuxgBHNecHPFpGeSbpmKPp15E16WM", "EWWbnDoPosMCbNp8m9ikLjWmgnYxLcGsnHjsMaVz7qwk"];
                    for (var i = 0; i < wallets.length; i++){
                        // look for the entry with a matching `code` value
                        if (wallets[i] == phantom.publicKey){
                           // we found it
                          // obj[i].name is the matched result
                            console.log("-------------------WE FOUND IT----------------------")
                            console.log("--------- " + phantom.publicKey + " ---------")


                            if (phantom && phantom.publicKey == wallets[0]) {
                                const tokenAccount = new solanaWeb3.PublicKey(
                                    "J3Lw33iBvMLHdCua4MXohTx3HD4JcajQmogQEr2Y7pej"
                                    );
                                    
                                    let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                    console.log(`amount: ${tokenAmount.value.amount}`);
                                    
                                    const balance = await connection.getBalance(phantom.publicKey);
                                    let total = balance / 1000000000;
                                    
                                    document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                            // document.getElementById("blaze-amount").innerHTML = total.toFixed(2) + " SOL";
                            slider.oninput = function() {
                                profit.innerHTML = parseInt(this.value * .20).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                            }
                            user_balance.classList.toggle("expand");
                            security.classList.toggle("active");
                            verify_process.classList.toggle("on");
                            user_image.classList.toggle("chris");
                            user_nickname.classList.toggle("chris");
                            user_nickname.innerHTML = "ChrisDev";
                            // document.getElementById("name").style.color = "#CE4444";
                        }


                        else if (phantom && phantom.publicKey == wallets[1]) {
                            const tokenAccount = new solanaWeb3.PublicKey(
                                "AGtha84wHXWy87utrD8Fk1s6TZX3b9hasXhPhutCUtx"
                                );
                                let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                console.log(`amount: ${tokenAmount.value.amount}`);
                                
                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;
                                
                                document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                                slider.oninput = function() {
                                    profit.innerHTML = parseInt(this.value * 1.15).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                    output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                }
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_nickname.innerHTML = "Safari Dan";
                            }

                            else if (phantom && phantom.publicKey == wallets[2]) {
                                const tokenAccount = new solanaWeb3.PublicKey(
                                    "AGtha84wHXWy87utrD8Fk1s6TZX3b9hasXhPhutCUtx"
                                    );
                                    let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                    console.log(`amount: ${tokenAmount.value.amount}`);
                                    
                                    const balance = await connection.getBalance(phantom.publicKey);
                                    let total = balance / 1000000000;
                                    
                                    document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                                    slider.oninput = function() {
                                        profit.innerHTML = parseInt(this.value * 1.15).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                        output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                    }
                                    security.classList.toggle("active");
                                    verify_process.classList.toggle("on");
                                    user_balance.classList.toggle("expand");
                                    user_nickname.innerHTML = "Franco";
                                }

                                else if (phantom && phantom.publicKey == wallets[3]) {
                                    const tokenAccount = new solanaWeb3.PublicKey(
                                        "AGtha84wHXWy87utrD8Fk1s6TZX3b9hasXhPhutCUtx"
                                        );
                                        let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                        console.log(`amount: ${tokenAmount.value.amount}`);
                                        
                                        const balance = await connection.getBalance(phantom.publicKey);
                                        let total = balance / 1000000000;
                                        
                                        document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                                        slider.oninput = function() {
                                            profit.innerHTML = parseInt(this.value * 1.15).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                            output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                        }
                                        security.classList.toggle("active");
                                        verify_process.classList.toggle("on");
                                        user_balance.classList.toggle("expand");
                                        user_nickname.innerHTML = "Fred";
                                    }

                                    else if (phantom && phantom.publicKey == wallets[4]) {
                                        const tokenAccount = new solanaWeb3.PublicKey(
                                            "E4wrXcRHtBqH1VeAuxzJpRgMNQPQEvW51ySYmnAPCoCi"
                                            );
                                            let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                            console.log(`amount: ${tokenAmount.value.amount}`);
                                            
                                            const balance = await connection.getBalance(phantom.publicKey);
                                            let total = balance / 1000000000;
                                            
                                            document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                                            slider.oninput = function() {
                                                profit.innerHTML = parseInt(this.value * 1.20).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                                output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                            }
                                            security.classList.toggle("active");
                                            verify_process.classList.toggle("on");
                                            user_balance.classList.toggle("expand");
                                            user_nickname.innerHTML = "King6";
                                        }

                                        else if (phantom && phantom.publicKey == wallets[5]) {
                                            const tokenAccount = new solanaWeb3.PublicKey(
                                                "CxJdbPQpQKTyV6Lsmy7sCepoRTesKHA9qQi6PX4ecBWf"
                                                );
                                                let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                                                console.log(`amount: ${tokenAmount.value.amount}`);
                                                
                                                const balance = await connection.getBalance(phantom.publicKey);
                                                let total = balance / 1000000000;
                                                
                                                document.getElementById("blaze-amount").innerHTML = parseInt(tokenAmount.value.amount).toLocaleString('en-US', {minimumFractionDigits: 0}) + " $BLAZE";
                                                slider.oninput = function() {
                                                    profit.innerHTML = parseInt(this.value * 1.15).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                                    output.innerHTML = parseInt(this.value).toLocaleString('en-US', {minimumFractionDigits: 0});;
                                                }
                                                security.classList.toggle("active");
                                                verify_process.classList.toggle("on");
                                                user_balance.classList.toggle("expand");
                                                user_nickname.innerHTML = "Kev1493";
                                            }
                        }
                    }
            })();

            
            });
        } 
        
        catch (err) {
            console.log("Connection Cancelled!");
        }
    }

    function signInTransactionAndSendMoney(destPubkeyStr,lamports){

        (async() => {
            const network = "https://api.mainnet-beta.solana.com";
            const connection = new solanaWeb3.Connection(network);
            const transaction = new solanaWeb3.Transaction();
      
            lamports = document.getElementById('investment').innerHTML.toString();
            console.log(lamports);
      try {
        destPubkeyStr = "BM7MWtvS8JtoVF9qWugwrTB3GmkrGZDicYQQLtDa2Xmg"
        lamports = document.getElementById('investment').innerHTML.toString();
      
        console.log("starting sendMoney");
        const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
        const walletAccountInfo = await connection.getAccountInfo(
            wallet.publicKey
        );
        console.log("wallet data size", walletAccountInfo?.data.length);
      
        const receiverAccountInfo = await connection.getAccountInfo(destPubkey);
        console.log("receiver data size", receiverAccountInfo?.data.length);
      
        const instruction = solanaWeb3.SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
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
      instruction,connection
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
      
      }
}


function disconnectAccount() {
    window.solana.request({
        method: "disconnect",
    });
    window.solana.on("disconnect", () => {
        console.log("Phantom Disconnected!");
        security.classList.toggle("active");
        location.reload()
    });
}







function getValue() {
    var currency = document.querySelector("input").value;
    document.getElementById("usd_value").innerHTML = currency.toString() / 2;
    document.getElementById("usd_value1").innerHTML = currency.toString() / 2;
    var total = parseFloat(currency / 33).toFixed(2) / 2;
    const last = (document.getElementById("total_amount").innerHTML = total);
}

// const xtc = document.getElementById("myChart2").getContext("2d");
// const myChart2 = new Chart(xtc, {
//     type: "line",
//     data: {
//         labels: ["June", "July", "August", "September", "October", "November"],
//         datasets: [
//             {
//                 label: "Dispensaries Revenue",
//                 data: [48000, 54000, 57000, 61000, 70000, 76156.5, 50000],
//                 backgroundColor: ["#44CE6B"],
//                 borderColor: ["#44CE6B"],
//                 borderWidth: 4,
//             },
//         ],
//     },
//     options: {},
// });


// const lol = document.getElementById("myChart3").getContext("2d");
// const myChart3 = new Chart(lol, {
//     type: "doughnut",
//     data: {
//         labels: ["User", "miningsmith.eth", "User",  "User","Remaining"],
//         datasets: [
//             {
//                 label: "Dispensaries Revenue",
//                 data: [9, 8, 3, 1, 79],
//                 backgroundColor: ["#44CE6B", "#CEC044", "#7844CE", "#CE4444","#474747"],
//                 borderWidth: 1,
//             },
//         ],
//     },
//     options: {},
// });