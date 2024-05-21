import "../style/cvDisplay.scss"
import CvHeader from "./cv/cvHeader"
import { cvProps } from "../myTypes"
import CvSummary from "./cv/cvSummary"

export default function CvDisplay({data, profileInfo}: cvProps) {
  


  function CvItem() {
    return (
      <li className="cv-education-item">
        <div className="period">
          <p className="date">
            2009-2013
          </p>
          <p className="address">Nairobi City, Kenya</p>
        </div>
        <div className="description">
          <h3 className="title">B.S. Data Science</h3>
          <p className="location">Kenyatta University</p>
          <p className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aperiam nemo natus dolorem mollitia deserunt id, ullam obcaecati minus magni.</p>
        </div>
      </li>
    )
  }

  function CvSection() {
    return (
      <div className='cv-education'>
        <h2 className="cv-subheading">Education</h2>
        <ul>
          <CvItem />
        </ul>
      </div>
    )
  }

  return (
    <div className="cv-display">
      <CvHeader data={data} />
      <CvSummary profile={profileInfo}/>
      <CvSection />
    </div>
  )
}
