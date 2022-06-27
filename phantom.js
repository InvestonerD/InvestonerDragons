const isPhantomInstalled = window.solana && window.solana.isPhantom

const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

function getAccount()
{
    window.solana.connect
    window.solana.request({method:"connect"});
    window.solana.on('connect', () => console.log("connected!"));
    window.solana.connect({ onlyIfTrusted: true });
};

function disconnectAccount() 
{
  window.solana.request({ method: "disconnect" });
  window.solana.on("disconnect", () => console.log("disconnected!"));
};