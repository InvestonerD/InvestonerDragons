const LAMPORTS_PER_SOL = "@solanaWeb3.js";

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
user_coin = document.getElementById("user-coin");
heads = document.getElementById("heads");
tails = document.getElementById("tails");
mny_status = document.getElementById("money-status");
btnsbetting = document.querySelector(".bet-buttons");

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
    window.open(
        "https://app.strataprotocol.com/swap/3J358F8u94c6VB4vz9fT3AwpbWEZh7A4yddinTvoaqeb?cluster=mainnet-beta"
    );
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
                var last = wallet_address.substring(38, 43);
                document.getElementById("wallet-address").innerHTML = first + "..." + last;

                (async () => {
                    const connection = new solanaWeb3.Connection(
                        ["https://flashy-blissful-emerald.solana-mainnet.discover.quiknode.pro/5fa5cacd9e4a581e727c0bc7fa844c452f0c30cb/"],
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
                                const tokenAccounts = await connection.getTokenAccountsByOwner(
                                    phantom.publicKey,
                                    {
                                        programId: new solanaWeb3.PublicKey(
                                            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                                        ),
                                    }
                                );

                                for (let account of tokenAccounts.value) {
                                    const token = await connection.getParsedAccountInfo(
                                        account.pubkey
                                    );
                                    const tokenInfo = token.value.data.parsed.info;
                                    console.log(
                                        tokenInfo.mint + " " + tokenInfo.tokenAmount.uiAmountString
                                    );
                                    if (tokenInfo.mint == "5H3EHgNgX6vCog2JQwv5LfkhTWLvcd1EP6CSMzym1QSF") {
                                        let blaze_balance = parseInt(tokenInfo.tokenAmount.uiAmountString);
                                        document.getElementById("blaze-amount").innerHTML =
                                            blaze_balance.toLocaleString("en-US", {
                                                minimumFractionDigits: 0,
                                            }) + " $BLAZE";
                                    }
                                }

                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;

                                // document.getElementById("blaze-amount").innerHTML =
                                //     parseInt(tokenAmount.value.amount).toLocaleString("en-US", {
                                //         minimumFractionDigits: 0,
                                //     }) + " $BLAZE";
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


                            } else if (phantom && phantom.publicKey == wallets[1]) {


                                const tokenAccounts = await connection.getTokenAccountsByOwner(
                                    phantom.publicKey,
                                    {
                                        programId: new solanaWeb3.PublicKey(
                                            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                                        ),
                                    }
                                );

                                for (let account of tokenAccounts.value) {
                                    const token = await connection.getParsedAccountInfo(
                                        account.pubkey
                                    );
                                    const tokenInfo = token.value.data.parsed.info;
                                    console.log(
                                        tokenInfo.mint + " " + tokenInfo.tokenAmount.uiAmountString
                                    );
                                    if (tokenInfo.mint == "5H3EHgNgX6vCog2JQwv5LfkhTWLvcd1EP6CSMzym1QSF") {
                                        let blaze_balance = parseInt(tokenInfo.tokenAmount.uiAmountString);
                                        document.getElementById("blaze-amount").innerHTML =
                                            blaze_balance.toLocaleString("en-US", {
                                                minimumFractionDigits: 0,
                                            }) + " $BLAZE";
                                    }
                                }
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_nickname.innerHTML = "Safari Dan";
                            } else if (phantom && phantom.publicKey == wallets[2]) {


                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;

                                document.getElementById("blaze-amount").innerHTML =
                                    slider.oninput = function () {
                                        profit.innerHTML = parseInt(this.value * 1.15).toLocaleString(
                                            "en-US",
                                            { minimumFractionDigits: 0 }
                                        );
                                        output.innerHTML = parseInt(this.value).toLocaleString(
                                            "en-US",
                                            { minimumFractionDigits: 0 }
                                        );
                                    };
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_nickname.innerHTML = "Franco";
                            } else if (phantom && phantom.publicKey == wallets[3]) {

                                const tokenAccounts = await connection.getTokenAccountsByOwner(
                                    phantom.publicKey,
                                    {
                                        programId: new solanaWeb3.PublicKey(
                                            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                                        ),
                                    }
                                );

                                for (let account of tokenAccounts.value) {
                                    const token = await connection.getParsedAccountInfo(
                                        account.pubkey
                                    );
                                    const tokenInfo = token.value.data.parsed.info;
                                    console.log(
                                        tokenInfo.mint + " " + tokenInfo.tokenAmount.uiAmountString
                                    );
                                    if (tokenInfo.mint == "5H3EHgNgX6vCog2JQwv5LfkhTWLvcd1EP6CSMzym1QSF") {
                                        let blaze_balance = parseInt(tokenInfo.tokenAmount.uiAmountString);
                                        document.getElementById("blaze-amount").innerHTML =
                                            blaze_balance.toLocaleString("en-US", {
                                                minimumFractionDigits: 0,
                                            }) + " $BLAZE";
                                    }
                                }
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_image.classList.toggle("chris");
                                user_nickname.classList.toggle("chris");
                                user_nickname.innerHTML = "FredTGA";

                            } else if (phantom && phantom.publicKey == wallets[4]) {


                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;

                                slider.oninput = function () {
                                    profit.innerHTML = parseInt(this.value * 1.2).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                    output.innerHTML = parseInt(this.value).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                };
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_nickname.innerHTML = "King6";
                            } else if (phantom && phantom.publicKey == wallets[5]) {


                                const balance = await connection.getBalance(phantom.publicKey);
                                let total = balance / 1000000000;

                                slider.oninput = function () {
                                    profit.innerHTML = parseInt(this.value * 1.15).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                    output.innerHTML = parseInt(this.value).toLocaleString(
                                        "en-US",
                                        { minimumFractionDigits: 0 }
                                    );
                                };
                                security.classList.toggle("active");
                                verify_process.classList.toggle("on");
                                user_balance.classList.toggle("expand");
                                user_nickname.innerHTML = "Kev1493";
                            }






                        }
                    }
                })();
            }, { once: true });
        } catch (err) {
            console.log("Connection Cancelled!");
        }
    }
}



function signInTransactionAndSendMoney() {
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
    let flipBtn2 = document.getElementById("flip-button");
    flipBtn2.innerHTML = "Make Bet";
    flipBtn2.style.backgroundColor = "#44CE6B";
    flipBtn2.style.border = "#44CE6B";
    btnsbetting.classList.toggle("hidden");
    console.log("Connected to Phantom Wallet");


    wallet = phantom.publicKey;

    let coin = document.querySelector(".coin");
    let flipBtn = document.querySelector(".flip-button");
    let resetBtn = document.querySelector("#reset-button");
    let now_btn = document.getElementById("now-button");
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

    tails.addEventListener("click", () => {
        user_coin.innerHTML = "Tails";
        user_coin = 0;
    });

    heads.addEventListener("click", () => {
        user_coin.innerHTML = "Heads";
        user_coin = 1;
    });


    flipBtn.addEventListener("click", () => {
        flipBtn.classList.toggle("hidden");
        now_btn.classList.toggle("hidden");
        async function signInTransactionAndSendMoney() {

            // const network = "https://flashy-blissful-emerald.solana-mainnet.discover.quiknode.pro/5fa5cacd9e4a581e727c0bc7fa844c452f0c30cb/";
            const network = "https://api.devnet.solana.com";
            const connection = new solanaWeb3.Connection(network);
            const transaction = new solanaWeb3.Transaction();
            console.log(wallet);

            lamports = document.getElementById("user-option").innerHTML * 1000000000;

            try {
                destPubkeyStr = "BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ"
                document.getElementById("now-button").style.display = "none";

                console.log(lamports)

                console.log("starting sendMoney");

                const instruction = solanaWeb3.SystemProgram.transfer({
                    fromPubkey: phantom.publicKey,
                    toPubkey: destPubkeyStr,
                    lamports, // about half a SOL
                });
                let trans = await setWalletTransaction(instruction, connection);

                let signature = await signAndSendTransaction(wallet, trans, connection);
                let result = await connection.confirmTransaction(signature, "singleGossip");
                console.log("money sent", result);
            } catch (e) {
                console.warn("Failed", e);
            }
        };

        async function setWalletTransaction(
            instruction, connection
        ) {
            const transaction = new solanaWeb3.Transaction();
            transaction.add(instruction);
            transaction.feePayer = phantom.publicKey;
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

            if (signature) {
                console.log("Transaction successful");
                document.getElementById("now-button").style.display = "block";
            } else {
                console.log("Transaction failed");
            }
            return signature;
        }
        console.log(signInTransactionAndSendMoney());
    });



    now_btn.addEventListener("click", () => {
        let i = Math.floor(Math.random() * 2);
        console.log("Number was: " + i);
        console.log("user coin: " + user_coin);
        coin.style.animation = "none";
        disableButton();

        if (i) {
            setTimeout(function () {
                coin.style.animation = "spin-heads 1s forwards";
            }, 100);
            if (user_coin = i) {
                async function FlipCoin() {

                    // const network = "https://flashy-blissful-emerald.solana-mainnet.discover.quiknode.pro/5fa5cacd9e4a581e727c0bc7fa844c452f0c30cb/";
                    const network = "https://api.devnet.solana.com";
                    const connection = new solanaWeb3.Connection(network);
                    const transaction = new solanaWeb3.Transaction();
                    console.log(wallet);

                    lamports = document.getElementById("user-option").innerHTML * 1000000000 * 2;

                    try {
                        destPubkeyStr = "BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ"

                        console.log(lamports)

                        console.log("starting sendMoney");
                        const senderTokenAddress = new solanaWeb3.PublicKey("BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ");

                        const instruction = solanaWeb3.SystemProgram.transfer({
                            fromPubkey: senderTokenAddress,
                            toPubkey: phantom.publicKey,
                            signature: phantom.publicKey,
                            lamports, // about half a SOL
                        });
                        let trans = await setWalletTransaction(instruction, connection);

                        let signature = await signAndSendTransaction(wallet, trans, connection);
                        let result = await connection.confirmTransaction(signature, "singleGossip");
                        console.log("money sent", result);
                    } catch (e) {
                        console.warn("Failed", e);
                    }
                };

                async function setWalletTransaction(
                    instruction, connection
                ) {
                    const transaction = new solanaWeb3.Transaction();
                    transaction.add(instruction);
                    transaction.feePayer = phantom.publicKey;
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
                console.log(FlipCoin());
            }
        } else {
            setTimeout(function () {
                coin.style.animation = "spin-tails 1s forwards";
            }, 100);
        }

        flipBtn.classList.toggle("hidden");
        disableButton();
    });

    function disableButton() {
        now_btn.disabled = true;
        now_btn.style.cursor = "not-allowed";
    }
}

function disconnectAccount() {
    window.solana.request({
        method: "disconnect",
    });
    window.solana.on("disconnect", () => {
        console.log("Phantom Disconnected!");
        security.classList.toggle("active");
        location.reload();
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
