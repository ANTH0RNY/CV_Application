import DateForm from "./dateForm";
import { infoType } from "../../myTypes";

type educationProps = {
  data: infoType;
  handler: Function;
};

export default function EducationForm({ data, handler }: educationProps) {
  return (
    <div className="education-form a-form">
      <label>
        <p>School</p>
        <input
          type="text"
          placeholder="Nairobi University"
          value={data.institution}
          onChange={(e) => {
            handler(data.id, "institution", e.target.value);
          }}
        />
      </label>
      <label>
        <p>Title</p>
        <input
          type="text"
          placeholder="Bsc Computer Engineering"
          value={data.title}
          onChange={(e) => {
            handler(data.id, "title", e.target.value);
          }}
        />
      </label>
      <label>
        <p>Date of Study</p>
        <DateForm id={data.id} data={data.duration} handler={handler} />
      </label>
      <label>
        <p>Location</p>
        <input
          type="text"
          placeholder="Nairobi, Kenya"
          value={data.location}
          onChange={(e) => {
            handler(data.id, "location", e.target.value);
          }}
        />
      </label>
      <label>
        <p>Description</p>
        <textarea
          placeholder="What you learned"
          value={data.description}
          onChange={(e) => {
            handler(data.id, "description", e.target.value);
          }}
        />
      </label>
    </div>
  );
}
