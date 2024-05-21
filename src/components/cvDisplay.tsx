import phone from '../assets/img/phone-svgrepo-com.svg'
import email from "../assets/img/email-svgrepo-com.svg"
import address from "../assets/img/address-location-map-svgrepo-com.svg"
import "../style/cvDisplay.scss"


export default function CvDisplay() {
  function CvHeader() {
    return (
      <div className="cv-header">
        <div className="name-job-title">
          <p className="name">Nelson Barker</p>
          <p className="job-title cv-subheading">Junior Developer</p>
        </div>
        <div className="details">
          <div className="phone-number">
            <img src={phone} alt="Phone logo" />
            <p>+254-012-4567-8910</p>
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <p>nelson@example.com</p>
          </div>
          <div className="address">
            <img src={address} alt="address" />
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    )
  }
  function CvSummary() {
    return (
      <div className='cv-summary'>
        <h2 className="cv-subheading">SUMMARY</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatum aperiam totam at iure recusandae, similique provident sed. Deleniti, esse autem explicabo quo odit dolores earum repellat exercitationem quisquam, officiis eum est dolorem, aperiam corporis commodi molestias distinctio eligendi nam. Voluptas, officiis odit laudantium ipsam assumenda ipsa dolorum explicabo nihil!</p>
      </div>
    )
  }

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
      <CvHeader />
      <CvSummary />
      <CvSection />
    </div>
  )
}
