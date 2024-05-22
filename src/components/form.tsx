// import { ChangeEvent, useState } from "react";
import Accordion from "./accordion";
import "../style/form.scss";
import { buttonProps } from "../myTypes";
import GeneralForm from "./form/generalForm";
import ProfileForm from "./form/profileForm";
import EducationForm from "./form/educationForm";
import { formProps } from "../myTypes";
import ExperienceForm from "./form/experienceForm";

export default function Form({
  data,
  handleFunction,
  profileInfo,
  handleProfileInfo,
  educationInfoList,
  handleEducationInfoList,
  appendList
}: formProps) {
  // interface buttonProps {
  //   title?: String,
  //   classSelector?:String
  // }

  function MyButton({ title = "add", classSelector = "" }: buttonProps) {
    return <button className={"a-btn " + classSelector} onClick={(_)=> appendList('education')}>{title}</button>;
  }

  return (
    <div className="form">
      <Accordion title={"Personal Information"}>
        <GeneralForm data={data} handleFunction={handleFunction} />
      </Accordion>

      <Accordion title={"Your Profile"}>
        <ProfileForm profile={profileInfo} handleFunction={handleProfileInfo} />
      </Accordion>

      <Accordion title={"Education"}>
      {educationInfoList.map((item)=> <EducationForm data={item} handler={handleEducationInfoList} key={item.id}/>)}
        <MyButton title={"Add Education"} />
      </Accordion>
      <Accordion title={"Work Experience"}>
        {/* <ExperienceForm /> */}
        <MyButton title={"Add Work Experience"} />
      </Accordion>
      {/* <details>
        <summary>
          Hello
        </summary>

      </details> */}
    </div>
  );
}
