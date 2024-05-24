  import "../style/cvDisplay.scss"
import CvHeader from "./cv/cvHeader"
import { cvProps } from "../myTypes"
import CvSummary from "./cv/cvSummary"
import CvSection from "./cv/cvSection"
import { useRef} from "react"

// const doc = new jsPDF()

export default function CvDisplay({data, profileInfo, educationInfo, experienceInfo}: cvProps) {
  const cv = useRef<HTMLDivElement>(null)

  return (
    <div className="cv-display" ref={cv}>
      <CvHeader data={data} />
      <CvSummary profile={profileInfo}/>
      <CvSection title="education" data={educationInfo}/>
      <CvSection title="experience" data={experienceInfo}/>
    </div>
  )
}
