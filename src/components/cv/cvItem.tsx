import { infoType } from "../../myTypes"
type myProps={
    data: infoType
}
export default function CvItem({data}:myProps) {
    return (
      <li className="cv-education-item">
        <div className="period">
          <p className="date">
            {data.duration.from.getFullYear()}-{data.duration.to.getFullYear()}
          </p>
          <p className="address">{data.location}</p>
        </div>
        <div className="description">
          <h3 className="title">{data.title}</h3>
          <p className="location">{data.institution}</p>
          <p className="details">{data.description}</p>
        </div>
      </li>
    )
  }