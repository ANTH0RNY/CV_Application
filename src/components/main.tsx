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

function handlePersonalInfoChange(key: personalKeys, value:string){
    const info = {...personalInfo}
    info[key]=value;
    setPersonalInfo(info)
}

  return (
    <div className="main">
      <Form data={personalInfo} handleFunction={handlePersonalInfoChange} />
      <CvDisplay data={personalInfo} />
    </div>
  )
}
