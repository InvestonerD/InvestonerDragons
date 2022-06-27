(async () => {
const web3 =  require("@solana/web3.js");

  // Connect to cluster
    const connection = new web3.Connection(
    "wss://small-withered-forest.solana-mainnet.quiknode.pro/f27dce8683ca897aae9ceca475d7c7251de11fb7/",
    'confirmed',
    );
console.log(connection);
})

const from = web3.Keypair.generate();
  const airdropSignature = await connection.requestAirdrop(
    from.publicKey,
    web3.LAMPORTS_PER_SOL, // 10000000 Lamports in 1 SOL
  );
  await connection.confirmTransaction(airdropSignature);``

  // Generate a new random public key
  const to = web3.Keypair.gene