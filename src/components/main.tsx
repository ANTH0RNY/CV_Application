import Form from "./form";
import CvDisplay from "./cvDisplay";
import { useState } from "react";
import { personalInfoType, infoType, durationType, lists } from "../myTypes";
import { v4 as uuidv4 } from "uuid";

type personalKeys = keyof personalInfoType;
type educationInfoListType = infoType[];
type educationKeys = keyof infoType;

export default function Main() {
  const [personalInfo, setPersonalInfo] = useState<personalInfoType>({
    name: "John Doe",
    jobTitle: "Junior Developer",
    email: "johndoe@example.com",
    phoneNo: "+254-123-456-789",
    address: "Nairobi, Kenya",
  });
  const [profileInfo, setProfileInfo] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatum aperiam totam at iure recusandae, similique provident sed. Deleniti, esse autem explicabo quo odit dolores earum repellat exercitationem quisquam, officiis eum est dolorem, aperiam corporis commodi molestias distinctio eligendi nam. Voluptas, officiis odit laudantium ipsam assumenda ipsa dolorum explicabo nihil!"
  );

  const [educationInfoList, setEducationInfoList] =
    useState<educationInfoListType>([
      {
        id: uuidv4(),
        institution: "Kenyatta university",
        title: "B.S. Data Science",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aperiam nemo natus dolorem mollitia deserunt id, ullam obcaecati minus magni.",
        location: "Nariobi, Kenya",
        duration: {
          to: new Date("2019-09-01"),
          from: new Date("2021-07-30"),
        },
      },
    ]);
  const [experienceInfoList, setExperienceInfoList] =
    useState<educationInfoListType>([
      {
        id: uuidv4(),
        institution: "Kenya Telecommunications",
        title: "Juniour Developer",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aperiam nemo natus dolorem mollitia deserunt id, ullam obcaecati minus magni.",
        location: "Nariobi, Kenya",
        duration: {
          to: new Date("2019-09-01"),
          from: new Date("2021-07-30"),
        },
      },
    ]);
  function handlePersonalInfoChange(key: personalKeys, value: string) {
    const info = { ...personalInfo };
    info[key] = value;
    setPersonalInfo(info);
  }

  function handleEducationInfoChange(
    id: string,
    key: educationKeys,
    value: string | durationType
  ) {
    if (key === "id") {
      throw new Error("invalid key");
    }
    // if (typeof value === "string" && key !== 'duration'){
    const items: educationInfoListType = [];
    for (let i of educationInfoList) {
      if (i.id === id) {
        const info = { ...i };
        if (key !== "duration" && typeof value === "string") {
          info[key] = value;
          items.push(info);
          continue;
        }
        if (typeof value !== "string" && key === "duration") {
          info[key] = value;
          items.push(info);
          continue;
        }
      }
      items.push(i);
    }
    setEducationInfoList(items);
    // }
  }

  function handleExerienceChange(
    id: string,
    key: educationKeys,
    value: string | durationType
  ) {
    if (key === "id") {
      throw new Error("invalid key");
    }
    // if (typeof value === "string" && key !== 'duration'){
    const items: educationInfoListType = [];
    for (let i of educationInfoList) {
      if (i.id === id) {
        const info = { ...i };
        if (key !== "duration" && typeof value === "string") {
          info[key] = value;
          items.push(info);
          continue;
        }
        if (typeof value !== "string" && key === "duration") {
          info[key] = value;
          items.push(info);
          continue;
        }
      }
      items.push(i);
    }
    setExperienceInfoList(items);
  }

  function appendList(listName: lists) {
    const item: infoType = {
      id: uuidv4(),
      institution: "",
      title: "",
      location: "",
      description: "",
      duration: {
        to: new Date(),
        from: new Date(),
      },
    };
    item.duration.to.setDate(new Date().getDate() + 3);
    item.duration.from.setDate(new Date().getDate() + 3);
    if (listName === "education") {
      const info = [...educationInfoList];
      info.push(item);

      setEducationInfoList(info);
      return;
    }
    if (listName === "experience") {
      const info = [...experienceInfoList];
      info.push(item);
      setExperienceInfoList(info);
      return;
    }
  }

  return (
    <div className="main">
      <Form
        data={personalInfo}
        handleFunction={handlePersonalInfoChange}
        profileInfo={profileInfo}
        handleProfileInfo={setProfileInfo}
        educationInfoList={educationInfoList}
        handleEducationInfoList={handleEducationInfoChange}
        appendList={appendList}
        experienceInfoList={experienceInfoList}
        handleExperienceChange={handleExerienceChange}
      />
      <CvDisplay data={personalInfo} profileInfo={profileInfo} />
    </div>
  );
}
