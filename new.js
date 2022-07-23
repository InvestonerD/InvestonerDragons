


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
active = document.querySelector(".active")

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


const lamports_per_sol = solanaWeb3.LAMPORTS_PER_SOL;


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

        try {
            
            var connect_wallet = phantom.connect();

            phantom.on("connect", () => {
                conn.addEventListener("click", () => {
                    user_balance.classList.toggle("expand");
                });

                console.log("Phantom Connected: " + phantom.isConnected);

                const wallet = phantom.publicKey;
                var wallet_address = phantom.publicKey.toString();
                console.log("Solana Wallet Address: " + wallet_address);
                var first = wallet_address.substring(0, 5);
                document.getElementById("wallet-address").innerHTML = first + "...";

            (async () => {
                const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"),
                    'confirmed',
                );

                if (solana && solana.publicKey !== null) {
                    const tokenAccount = new solanaWeb3.PublicKey(
                        "J3Lw33iBvMLHdCua4MXohTx3HD4JcajQmogQEr2Y7pej"
                    );

                    let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
                    console.log(`amount: ${tokenAmount.value.amount}`);

                    const balance = await connection.getBalance(phantom.publicKey);
                    let total = balance / 1000000000;

                    document.getElementById("blaze-amount").innerHTML = total.toFixed(2) + " SOL";
                }
            })();
            });
        } catch (err) {
            console.log("Connection Cancelled!");
        }
    }
}

function disconnectAccount() {
    window.solana.request({
        method: "disconnect",
    });
    window.solana.on("disconnect", () => {
        console.log("Phantom Disconnected!");
    });
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["June 20", "June 27", "July 4", "July 11", "July 18", "July 25"],
        datasets: [
            {
                label: "Casino Revenue",
                data: [17900, 24120, 19500, 24000, 37000, 40254.15, 50000],
                backgroundColor: ["#CEC044"],
                borderColor: ["#CEC044"],
                borderWidth: 4,
            },
        ],
    },
    options: {},
});

const xtc = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(xtc, {
    type: "line",
    data: {
        labels: ["June", "July", "August", "September", "October", "November"],
        datasets: [
            {
                label: "Dispensaries Revenue",
                data: [48000, 54000, 57000, 61000, 70000, 76156.5, 50000],
                backgroundColor: ["#44CE6B"],
                borderColor: ["#44CE6B"],
                borderWidth: 4,
            },
        ],
    },
    options: {},
});


const lol = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(lol, {
    type: "doughnut",
    data: {
        labels: ["miningsmith.eth", "User", "User",  "User", "User"],
        datasets: [
            {
                label: "Dispensaries Revenue",
                data: [12, 8, 5, 2, 1],
                backgroundColor: ["#44CE6B", "#CEC044", "#7844CE", "#CE4444", "#CE7644"],
                borderWidth: 1,
            },
        ],
    },
    options: {},
});
// (async () => {
//     const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"),
//         'confirmed',
//     );

//     if (phantom && phantom.publicKey !== null) {
//         const tokenAccount = new solanaWeb3.PublicKey(
//             "J3Lw33iBvMLHdCua4MXohTx3HD4JcajQmogQEr2Y7pej"
//           );

//           let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
//           console.log(`amount: ${tokenAmount.value.amount}`);

//         const balance = await connection.getBalance(phantom.publicKey);
//         console.log(balance / 1000000000);
//     }
// })();


// (async () => {
//     const connection = new solanaWeb3.Connection(
//         solanaWeb3.clusterApiUrl("mainnet-beta"),
//         "confirmed"
//     );

//     const tokenAccount = new solanaWeb3.PublicKey(
//         "J3Lw33iBvMLHdCua4MXohTx3HD4JcajQmogQEr2Y7pej"
//     );

//     let tokenAmount = await connection.getTokenAccountBalance(
//         tokenAccount
//     );
//     console.log(`amount: ${tokenAmount.value.amount}`);
//     console.log(`decimals: ${tokenAmount.value.decimals}`);

//     document.getElementById("blaze-amount").innerHTML =
//         tokenAmount.value.amount;
// })();