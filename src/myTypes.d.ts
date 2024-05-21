interface personalInfoType {
  // name: string|number|undefined| readonly string[];
  name: string
  jobTitle: string;
  email: string;
  phoneNo: string;
  address: string;
}

interface infoType {
  institution: String;
  title: String;
  location: String;
  description: String;
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
}

interface cvProps{
  data: personalInfoType
}
export { personalInfoType, infoType, buttonProps, formProps, cvProps};
