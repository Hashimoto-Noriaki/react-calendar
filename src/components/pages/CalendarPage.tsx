import { eachWeekOfInterval,eachDayOfInterval,getMonth,startOfMonth,endOfWeek,endOfMonth } from "date-fns";
import { useEffect,useState } from "react";
import { CalendarHeader } from "../organisms/CalendarHeader";
import { CalendarBody } from "../organisms/CalendarBody";

export const CalendarPage = () => {
  const today = new Date()
  const [dateList,setDateList] = useState<Date[][]>([]);


  useEffect(() => {
    const monthOfSundayList = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today)
    })
    const newDateList: Date[][] = monthOfSundayList.map((date)=> {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      })
    })
    setDateList(newDateList);
  },[])

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="w-full text-center font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
        <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
          <CalendarHeader/>
          <CalendarBody dateList={today} dateList={dateList} />
        </table>
      </div>
    </>
  );
}
