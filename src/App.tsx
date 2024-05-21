import "./style/main.scss"
import { useState } from "react"
import 'css-doodle'
// import MyDoodle from "./components/doodle/myDoodle"
import Main from "./components/main"
import Doodle2 from "./components/doodle/doodle2"

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={`${dark ? 'theme--dark' : 'theme--default'} root`}>
      {/*<MyDoodle />*/}
      <Doodle2 />
      <Main />
    </div>
  )
}

export default App
