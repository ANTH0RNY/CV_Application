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
  appendList,
  experienceInfoList,
  handleExperienceChange,
}: formProps) {
  // interface buttonProps {
  //   title?: String,
  //   classSelector?:String
  // }

  function MyButton({ title = "add", classSelector = "", list="education"}: buttonProps) {
    return (
      <button
        className={"a-btn " + classSelector}
        onClick={(_) => appendList(list)}
      >
        {title}
      </button>
    );
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
        {educationInfoList.map((item) => (
          <EducationForm
            data={item}
            handler={handleEducationInfoList}
            key={item.id}
          />
        ))}
        <MyButton title={"Add Education"} />
      </Accordion>
      <Accordion title={"Work Experience"}>
        {experienceInfoList.map((item) => (
          <ExperienceForm data={item} handler={handleExperienceChange} key={item.id} />
        ))}
        <MyButton title={"Add Work Experience"} list="experience"/>
      </Accordion>
      {/* <details>
        <summary>
          Hello
        </summary>

      </details> */}
    </div>
  );
}
