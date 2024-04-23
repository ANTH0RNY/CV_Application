import "./style/main.scss"
import { useState } from "react"

function App() {
const [dark, setDark] = useState(true)
return(
  <div className={dark?'theme--dark':'theme--default'}>
<div className="app">
Hello
<button onClick={()=> setDark(!dark)}>Change</button>
</div>
  </div>
)
}

export default App
