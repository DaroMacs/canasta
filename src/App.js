import { useContext, useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css'
import Home from "./components/Home";
import { DarkThemeContext } from "./contexts/DarkThemeContext";
import { ToggleCardsTableContext } from "./contexts/ToggleCardsTableContext";
import Spinner from "./components/Spinner";

function App() {

  const passwordTest = 'cityslika'

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const {setDarkMode} = useContext(DarkThemeContext)
  const {setToggleMode} = useContext(ToggleCardsTableContext)
  const [tokenAPI, setTokenAPI] = useState(false)
  const [loading, setLoading] = useState(true)


  const loginAPIToken = async (details) => {
        try {
              const url = `https://reqres.in/api/login`
              const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      username: details.email,
                      password: details.password,
                  }),
              }) 
              const result = await response.json()

              login(result, details)
            }  catch (error) {
                    console.log(error);
            }         
          }        
  
  const login = (result, details) => {
    if(result.token && passwordTest === details.password) {
        setError("")
        setTokenAPI(true)
    } else {
      setError('Incorrect Information!')
    }
  }

  const logOut = () => {
    setUser({email: "", password: ""});
    setTokenAPI(false)
    setDarkMode(false)
    setToggleMode(false)
  }

  return (
    <>
      {tokenAPI ? (
        <Home 
          user = {user}
          logOut = {logOut}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <LoginForm 
          loginAPIToken = {loginAPIToken}
          error = {error}
        />
      ) }
    </>
  )
}

export default App;
