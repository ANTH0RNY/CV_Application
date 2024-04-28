import { ReactNode, MouseEvent, useRef } from "react"
import "../style/accordion.scss"


type propType = {
  children: ReactNode,
  title: String,
  classSelector?: String,
}

export default function Accordion({ children, title, classSelector = ''}: propType) {
  const panel = useRef<HTMLDivElement>(null)
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const accordion = e.target as HTMLDivElement
    accordion.classList.toggle('active')
    if (panel.current!.style.maxHeight) {
      panel.current!.style.maxHeight = ''
    }
    else {
      panel.current!.style.maxHeight = panel.current!.scrollHeight + 'px'
      // panel.current!.style.removeProperty('maxHeight')
      // panel.current!.style.maxHeight = "max-content"
    }
  }

  return (
    <div className={"accordion " + classSelector}>
      <button className="accordion-button" onClick={handleClick}>{title}</button>
      <div className="accordion-panel" ref={panel}>{children}</div>
    </div>
  )
}
