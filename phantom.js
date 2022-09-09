// function getAccount() {
//     window.solana.connect
//     window.solana.request({method:'connect'})
//     window.solana.on('connect', () => console.log("connected"));
//     }

// function disconnectAccount() {
//     window.solana.disconnect()
//     window.solana.on('disconnect', () => console.log("disconnected"));
// }


















const isPhantomInstalled = window.solana && window.solana.isPhantom

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









// function signInTransactionAndSendMoney(destPubkeyStr,lamports){

//   (async() => {

//       const network = "https://api.mainnet.solana.com";
// const connection = new solanaWeb3.Connection(network);
// const transaction = new solanaWeb3.Transaction();

// lamports = document.getElementById("quantity").value * lamports_per_sol;

// try {
//   destPubkeyStr = "BPKRJPAAAnboZGmga4nTFBpXsiywhCXWAGfUTbvkm8qZ"
//   lamports = document.getElementById("quantity").value * lamports_per_sol;

//   console.log("starting sendMoney");
//   const destPubkey = new solanaWeb3.PublicKey(destPubkeyStr);
//   const walletAccountInfo = await connection.getAccountInfo(
//       wallet.publicKey
//   );
//   console.log("wallet data size", walletAccountInfo?.data.length);

//   const receiverAccountInfo = await connection.getAccountInfo(destPubkey);
//   console.log("receiver data size", receiverAccountInfo?.data.length);

//   const instruction = solanaWeb3.SystemProgram.transfer({
//     fromPubkey: wallet.publicKey,
//     toPubkey: destPubkey,
//     lamports, // about half a SOL
//   });
//   let trans = await setWalletTransaction(instruction, connection);

//   let signature = await signAndSendTransaction(wallet, trans, connection);
//   let result = await connection.confirmTransaction(signature, "singleGossip");
//   console.log("money sent", result);
// } catch (e) {
//   console.warn("Failed", e);
// }


//   })()

// async function setWalletTransaction(
// instruction,connection
// ) {
// const transaction = new solanaWeb3.Transaction();
// transaction.add(instruction);
// transaction.feePayer = wallet.publicKey;
// let hash = await connection.getRecentBlockhash();
// console.log("blockhash", hash);
// transaction.recentBlockhash = hash.blockhash;
// return transaction;
// }

// async function signAndSendTransaction(
// wallet,
// transaction,
// connection
// ) {
//    // Sign transaction, broadcast, and confirm
//   const { signature } = await window.solana.signAndSendTransaction(transaction);
// await connection.confirmTransaction(signature);


// //let signedTrans = await wallet.signTransaction(transaction);
// console.log("sign transaction");
// //let signature = await connection.sendRawTransaction(signedTrans.serialize());
// console.log("send raw transaction");
// return signature;
// }

// }