

const isPhantomInstalled = window.solana && window.solana.isPhantom
const http = require('http');
const express = require('express');
const app = new express();
const splToken = require('@solana/spl-token');
const { TOKEN_PROGRAM_ID } = require('@solana/spl-token');
const {Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL} = require('@solana/web3.js');
const { Connection, GetProgramAccountsFilter,} = require('@solana/web3.js');






function getValue() {
  let currency = document.getElementById('quantity').value.toString();
  let total = parseFloat(currency * .30).toFixed(2);
  const last = document.getElementById('sol_price').innerHTML = total;
};








var fs = require('fs');

http.createServer(function(req, res){
  fs.readFile('exchange.html', function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Lenght': data.lenght});
    res.write(data);
    res.end();
  })
}).listen(8000);

const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };










function signInTransactionAndSendMoney(destPubkeyStr,lamports){

  (async() => {
      const network = "https://api.mainnet-beta.solana.com";
      const connection = new solanaWeb3.Connection(network);
      const transaction = new solanaWeb3.Transaction();

      lamports = document.getElementById('sol_price').innerHTML * lamports_per_sol;

try {
  destPubkeyStr = "BM7MWtvS8JtoVF9qWugwrTB3GmkrGZDicYQQLtDa2Xmg"
  lamports = document.getElementById('sol_price').innerHTML * lamports_per_sol;

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