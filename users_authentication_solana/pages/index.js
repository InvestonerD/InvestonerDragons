import {useMoralis} from 'react-moralis'

export default function Home() {
  const {
    isAuthenticated,
    authenticate,
    user,
    logout,
    setUserData
  } = useMoralis()

  const [inputValue, setInputValue] = useState('')

  console.log(isAuthenticated)
  if(!isAuthenticated) {
    return(
      <button onClick={() => authenticate({
        type: 'sol',
        signingMessage: "The Investoner Dragons Inc is asking you to authorize access to your wallet to grant all utilities from website."
      })}>Login</button>
    )
  }
  return (
    <div>
      <p>Welcome dear {user.getUsername()} </p>
      <form onSubmit={e => {
        e.preventDefault()
        if(inputValue.trim() !== '') {
          setUserData({
            username: inputValue
          })
        }
      }}>
        <input placeholder='ex. NewUsername' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button type='submit'>Change username</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  )
}