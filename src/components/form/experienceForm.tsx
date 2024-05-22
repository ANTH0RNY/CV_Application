import DateForm from "./dateForm";
import { infoType } from "../../myTypes";

type experienceProps = {
    data: infoType,
    handler: Function
}

export default function ExperienceForm({data, handler}: experienceProps) {
    return (
      <div className="experience-form a-form">
        <label>
          <p>Company Name</p>
          <input type="text" placeholder="Microsoft" value={data.institution} onChange={(e)=>{handler(data.id, 'institution', e.target.value)}}/>
        </label>
        <label>
          <p>Position Title</p>
          <input type="text" placeholder="Junior Developer" value={data.title} onChange={(e)=>{handler(data.id, 'title', e.target.value)}}/>
        </label>
        <label>
          <p>Description</p>
          <textarea placeholder="UI Developer for edge" value={data.description} onChange={(e)=>{handler(data.id, 'description', e.target.value)}}/>
        </label>
        <label>
          <p>Duration</p>
          <DateForm id={data.id} data={data.duration} handler={handler}/>
        </label>
        <label>
          <p>Location</p>
          <input type="text" placeholder="Nairobi, Kenya" value={data.location} onChange={(e)=>{handler(data.id, 'location', e.target.value)}}/>
        </label>
      </div>
    );
  }
