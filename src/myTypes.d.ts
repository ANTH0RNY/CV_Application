interface personalInfoType {
  name: String;
  jobTitle: String;
  email: String;
  phoneNo: String;
  address: String;
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

export default { personalInfoType, infoType };
