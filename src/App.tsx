import "./style/main.scss"
import { useState } from "react"
import 'css-doodle'
import MyDoodle from "./components/doodle/myDoodle"
import Main from "./components/main"

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={`${dark ? 'theme--dark' : 'theme--default'} root`}>
      <MyDoodle />
      <Main />
    </div>
  )
}

export default App
