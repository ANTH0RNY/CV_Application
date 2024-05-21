import phone from '../../assets/img/phone-svgrepo-com.svg'
import email from "../../assets/img/email-svgrepo-com.svg"
import address from "../../assets/img/address-location-map-svgrepo-com.svg"
import { personalInfoType } from '../../myTypes'

interface theProps{
    data: personalInfoType
}

export default function CvHeader({data}: theProps) {
    return (
      <div className="cv-header">
        <div className="name-job-title">
          <p className="name">{data.name}</p>
          <p className="job-title cv-subheading">{data.jobTitle}</p>
        </div>
        <div className="details">
          <div className="phone-number">
            <img src={phone} alt="Phone logo" />
            <p>{data.phoneNo}</p>
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <p>{data.email}</p>
          </div>
          <div className="address">
            <img src={address} alt="address" />
            <p>{data.address}</p>
          </div>
        </div>
      </div>
    )
  }