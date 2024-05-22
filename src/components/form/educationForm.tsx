import DateForm from "./dateForm";
import { infoType } from "../../myTypes";

type educationProps = {
  data: infoType,
  handler: Function
}


export default function EducationForm({data, handler}: educationProps) {
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
          <DateForm id={data.id} data={data.duration} handler={handler}/>
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