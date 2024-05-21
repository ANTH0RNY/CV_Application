import Form from "./form"
import CvDisplay from "./cvDisplay"
import { useState } from "react"
import { personalInfoType } from "../myTypes"

type personalKeys = keyof personalInfoType

export default function Main() {
const [personalInfo, setPersonalInfo]=useState<personalInfoType>({
  name:"John Doe",
  jobTitle:"Junior Developer",
  email:"johndoe@example.com",
  phoneNo:"+254-123-456-789",
  address:"Nairobi, Kenya"
})
const [profileInfo, setProfileInfo] = useState(
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatum aperiam totam at iure recusandae, similique provident sed. Deleniti, esse autem explicabo quo odit dolores earum repellat exercitationem quisquam, officiis eum est dolorem, aperiam corporis commodi molestias distinctio eligendi nam. Voluptas, officiis odit laudantium ipsam assumenda ipsa dolorum explicabo nihil!'
)

function handlePersonalInfoChange(key: personalKeys, value:string){
    const info = {...personalInfo}
    info[key]=value;
    setPersonalInfo(info)
}

  return (
    <div className="main">
      <Form data={personalInfo} handleFunction={handlePersonalInfoChange} profileInfo={profileInfo} handleProfileInfo={setProfileInfo}/>
      <CvDisplay data={personalInfo} profileInfo={profileInfo}/>
    </div>
  )
}
