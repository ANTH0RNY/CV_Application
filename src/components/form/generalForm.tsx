// import { formProps } from "../../myTypes";
import { personalInfoType } from "../../myTypes";
interface myProps{
  data: personalInfoType,
  handleFunction: Function
}

export default function GeneralForm({data, handleFunction}: myProps) {
    return (
      <div className="general-form a-form">
        <label>
          <p>Full Name</p>
          <input type="text" placeholder="John Smith" className="name" value={data.name} onChange={(e) => {
            handleFunction('name', e.target.value)
            // e.target.focus()
          }} />
        </label>
        <label>
          <p>Job Title</p>
          <input type="text" placeholder="Junior Developer" value={data.jobTitle} onChange={(e)=>{handleFunction('jobTitle', e.target.value)}}/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" placeholder="JohnSmith@mail.com" value={data.email} onChange={(e)=>{handleFunction('email', e.target.value)}}/>
        </label>

        <label>
          <p>Phone Number</p>
          <input type="tel" placeholder="+253 73i 447 5938" value={data.phoneNo} onChange={(e)=>{handleFunction('phoneNo', e.target.value)}}/>
        </label>

        <label>
          <p>Address</p>
          <input type="text" placeholder="Nairobi, Kenya" value={data.address} onChange={(e)=>{handleFunction('address', e.target.value)}}/>
        </label>
      </div>
    );
  }