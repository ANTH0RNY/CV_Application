import "../style/cvDisplay.scss"
import CvHeader from "./cv/cvHeader"
import { cvProps } from "../myTypes"
import CvSummary from "./cv/cvSummary"
import CvSection from "./cv/cvSection"

export default function CvDisplay({data, profileInfo, educationInfo, experienceInfo}: cvProps) {
  



  return (
    <div className="cv-display">
      <CvHeader data={data} />
      <CvSummary profile={profileInfo}/>
      <CvSection title="education" data={educationInfo}/>
      <CvSection title="experience" data={experienceInfo}/>
    </div>
  )
}
