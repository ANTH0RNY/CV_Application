interface personalInfoType {
  // name: string|number|undefined| readonly string[];
  name: string
  jobTitle: string;
  email: string;
  phoneNo: string;
  address: string;
}

interface infoType {
  id: readonly string,
  institution: string;
  title: string;
  location: string;
  description: string;
  duration: durationType;
}

interface durationType {
  to: Date;
  from: Date;
}

interface buttonProps {
  title?: String,
  classSelector?:String
}

interface formProps {
  data: personalInfoType;
  handleFunction: Function;
  profileInfo: string,
  handleProfileInfo: Function,
  educationInfoList: infoType[],
  handleEducationInfoList: Function
  appendList: Fuction
}

interface cvProps{
  data: personalInfoType,
  profileInfo: string,
}
export { personalInfoType, infoType, buttonProps, formProps, cvProps, durationType};
