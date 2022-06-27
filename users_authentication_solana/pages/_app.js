import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider
      appId={"CtNbQUN8SGHz9bV8yh1l7STWbmdHPI3s6JrkG1Z3"}
      serverUrl={"https://pdrn8l1ehzan.usemoralis.com:2053/server"}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp