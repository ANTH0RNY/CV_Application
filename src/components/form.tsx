import { ChangeEvent, useState } from "react";
import Accordion from "./accordion";
import "../style/form.scss";
import { buttonProps } from "../myTypes";
import GeneralForm from "./form/generalForm";
import ProfileForm from "./form/profileForm";

import { formProps } from "../myTypes";

export default function Form({ data, handleFunction , profileInfo, handleProfileInfo}: formProps) {
  



  function DateForm() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    const [date, setDate] = useState<Date>(currentDate);
    const [date1, setDate1] = useState<Date>(currentDate);
    const onSetDate = (e: ChangeEvent<HTMLInputElement>): void => {
      setDate(new Date(e.target.value));
    };
    const onSetDate1 = (e: ChangeEvent<HTMLInputElement>): void => {
      setDate1(new Date(e.target.value));
    };
    return (
      <div className="date-form">
        <input
          type="date"
          id="date-from"
          placeholder="2024-04-28"
          value={date1.toLocaleDateString("en-CA")}
          onChange={onSetDate1}
        />
        <input
          type="date"
          id="date-to"
          placeholder="2024-04-28"
          value={date.toLocaleDateString("en-CA")}
          onChange={onSetDate}
        />
      </div>
    );
  }

  function EducationForm() {
    return (
      <div className="education-form a-form">
        <label>
          <p>School</p>
          <input type="text" placeholder="Nairobi University" />
        </label>
        <label>
          <p>Title</p>
          <input type="text" placeholder="Bsc Computer Engineering" />
        </label>
        <label>
          <p>Date of Study</p>
          <DateForm />
        </label>
        <label>
          <p>Location</p>
          <input type="text" placeholder="Nairobi, Kenya" />
        </label>
        <label>
          <p>Description</p>
          <textarea placeholder="What you learned" />
        </label>
      </div>
    );
  }

  // interface buttonProps {
  //   title?: String,
  //   classSelector?:String
  // }

  function MyButton({ title = "add", classSelector = "" }: buttonProps) {
    return <button className={"a-btn " + classSelector}>{title}</button>;
  }

  function ExperienceForm() {
    return (
      <div className="experience-form a-form">
        <label>
          <p>Company Name</p>
          <input type="text" placeholder="Microsoft" />
        </label>
        <label>
          <p>Position Title</p>
          <input type="text" placeholder="Junior Developer" />
        </label>
        <label>
          <p>Description</p>
          <textarea placeholder="UI Developer for edge" />
        </label>
        <label>
          <p>Duration</p>
          <DateForm />
        </label>
        <label>
          <p>Location</p>
          <input type="text" placeholder="Nairobi, Kenya" />
        </label>
      </div>
    );
  }

  return (
    <div className="form">
      <Accordion title={"Personal Information"}>
        <GeneralForm data={data} handleFunction={handleFunction}/>
      </Accordion>

      <Accordion title={"Your Profile"}>
        <ProfileForm profile={profileInfo} handleFunction={handleProfileInfo}/>
      </Accordion>

      <Accordion title={"Education"}>
        <EducationForm />
        <MyButton title={"Add Education"} />
      </Accordion>
      <Accordion title={"Work Experience"}>
        <ExperienceForm />
        <MyButton title={"Add Work Experience"} />
      </Accordion>
    </div>
  );
}
