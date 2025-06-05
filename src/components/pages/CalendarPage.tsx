import { getMonth } from "date-fns";
import { DAYS_LIST } from "../../constants/calendar";

export const CalendarPage = () => {
  const today = new Date()

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="w-full text-center font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
        <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
          <thead>
            <tr className="bg-lime-800 text-white rounded-tl-lg rounded-tr-lg py-10">
              {DAYS_LIST.map((day) => (
                <th key={day} className="text-center text-xl py-3">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
