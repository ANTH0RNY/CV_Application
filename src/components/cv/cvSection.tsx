import CvItem from "./cvItem"
import { infoType } from "../../myTypes"

type myProps={
    data: infoType[],
    title: string
}

export default   function CvSection({data, title}: myProps) {
    return (
      <div className='cv-education'>
        <h2 className="cv-subheading">{title}</h2>
        <ul>
          {data.map((item)=><CvItem data={item} key={item.id}/>)}

        </ul>
      </div>
    )
  }