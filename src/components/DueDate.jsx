import { DayPicker } from 'react-day-picker'
import { updateDueDate } from '../service/updateDueDate'
import { formattedDate } from '../logic/formattedDate'
import { compareDates } from '../logic/compareDates'
import Delete from '../icons/Delete'
import CalendarExpir from '../icons/CalendarExpir'

import classNames from '../style.module.css'
import { useDueDate } from '../hooks/useDueDate'

export default function DueDate({ id, due_date, toogleRefreshTasks }) {
  // const [open, setOpen] = useState(false)
  // const [dueDate, setDueDate] = useState(due_date || null)
  const { dueDate, setDueDate, openDueDate, setOpenDueDate } = useDueDate({
    due_date,
  })

  function handleClickDueDate() {
    setDueDate(due_date)
    setOpenDueDate(!openDueDate)
  }

  function changeDueDate() {
    setOpenDueDate(!openDueDate)
    updateDueDate({ date: formattedDate(dueDate), id })
    toogleRefreshTasks()
  }

  function deleteDueDate(e) {
    e.stopPropagation()
    setDueDate(null)
    updateDueDate({ date: null, id })
    toogleRefreshTasks()
  }

  return (
    <>
      <div
        onClick={handleClickDueDate}
        className={`flex gap-1 items-center justify-between font-medium p-4 rounded-lg hover:bg-neutral-700 ${
          dueDate
            ? compareDates(dueDate)
              ? 'text-[#ebff95]'
              : 'text-red-500'
            : 'text-white'
        }`}
      >
        {dueDate ? (
          <div className="flex gap-1 items-center justify-center">
            <CalendarExpir />
            <span className="font-normal">{dueDate.toDateString()}</span>
          </div>
        ) : (
          <div className="flex gap-1 items-center justify-center">
            <CalendarExpir />
            <span>Due date</span>
          </div>
        )}
        {dueDate && (
          <div
            onClick={deleteDueDate}
            className="cursor-pointer transition duration-500 ease-in-out hover:rotate-180 hover:scale-110"
          >
            <Delete width="20px" height="20px" />
          </div>
        )}
      </div>

      <div
        className={`absolute inset-0 bg-transparent ${
          openDueDate ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`absolute bottom-24 right-[300px] z-10 p-2 rounded-2xl bg-neutral-900`}
        >
          <DayPicker
            mode="single"
            classNames={classNames}
            selected={dueDate}
            onSelect={setDueDate}
          />
          {/* <DayPicker
            className="rounded-lg bg-neutral-800"
            classNames={{
              today: `text-[#ebff95] font-medium`,
              selected: `bg-[#ebff95] border-[#ebff95] text-neutral-800 font-bold rounded-lg`,
              root: `${defaultClassNames.root} shadow-lg p-3`,
            }}
            mode="single"
            selected={dueDate}
            onSelect={setDueDate}
          /> */}
          <div className="w-full flex gap-2 mt-1">
            <button
              onClick={handleClickDueDate}
              className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
            >
              Close
            </button>

            <button
              onClick={changeDueDate}
              className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
