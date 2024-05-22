import { useRef } from "react";
import { ChangeEvent } from "react";
import { durationType } from "../../myTypes";

type dateProps={
  data: durationType,
  handler: Function,
  id: string
}

export default function DateForm({data, handler, id}:dateProps) {
   /* const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);*/

    // const [date, setDate] = useState<Date>(currentDate);
    // const [date1, setDate1] = useState<Date>(currentDate);

    const toDate = useRef<HTMLInputElement>(null)
    const fromDate = useRef<HTMLInputElement>(null)

    const onSetDate = (_: ChangeEvent<HTMLInputElement>): void => {
      // setDate(new Date(e.target.value));
      const duration: durationType={
        to: new Date(toDate.current?.value || ''),
        from: new Date(fromDate.current?.value || '')
      }
      handler(id, 'duration', duration)
    };

    return (
      <div className="date-form">
        <input
          type="date"
          id="date-from"
          ref={fromDate}
          placeholder="2024-04-28"
          // value={.toLocaleDateString("en-CA")}
          value={data.to.toLocaleDateString("en-CA")}
          onChange={onSetDate}
        />
        <input
          type="date"
          id="date-to"
          ref={toDate}
          placeholder="2024-04-28"
          value={data.from.toLocaleDateString("en-CA")}
          onChange={onSetDate}
        />
      </div>
    );
  }