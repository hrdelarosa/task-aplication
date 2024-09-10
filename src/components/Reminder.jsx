import { DayPicker } from 'react-day-picker'
import { updateReminder } from '../service/updateReminder'
import { formattedDate } from '../logic/formattedDate'
import { compareDates } from '../logic/compareDates'
import Clock from '../icons/Clock'
import Delete from '../icons/Delete'

import classNames from '../style.module.css'
import { useReminder } from '../hooks/useReminder'

export default function Reminder({ id, remind_at, toogleRefreshTasks }) {
  // const [open, setOpen] = useState(false)
  // const [dateReminder, setDateReminder] = useState(remind_at || null)
  const { dateReminder, setDateReminder, openRemind, setOpenRemind } =
    useReminder({
      remind_at,
    })

  function handleClickRemind() {
    setDateReminder(remind_at)
    setOpenRemind(!openRemind)
  }

  function changeRemind() {
    setOpenRemind(!openRemind)
    updateReminder({ date: formattedDate(dateReminder), id })
    toogleRefreshTasks()
  }

  function deleteRemind(e) {
    e.stopPropagation()
    setDateReminder(null)
    updateReminder({ date: null, id })
    toogleRefreshTasks()
  }

  return (
    <>
      <div
        onClick={handleClickRemind}
        className={`flex gap-1 items-center justify-between font-medium p-4 rounded-lg hover:bg-neutral-700 ${
          dateReminder
            ? compareDates(dateReminder)
              ? 'text-[#ebff95]'
              : 'text-red-500'
            : 'text-white'
        }`}
      >
        {dateReminder ? (
          <div className="flex gap-1 items-center justify-center">
            <Clock />
            <span className="font-normal">{dateReminder.toDateString()}</span>
          </div>
        ) : (
          <div className="flex gap-1 items-center justify-center">
            <Clock />
            <span>Reminder</span>
          </div>
        )}
        {dateReminder && (
          <div
            onClick={deleteRemind}
            className="cursor-pointer transition duration-500 ease-in-out hover:rotate-180 hover:scale-110"
          >
            <Delete width="20px" height="20px" />
          </div>
        )}
      </div>

      <div
        className={`absolute inset-0 bg-transparent ${
          openRemind ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`absolute bottom-24 right-[300px] z-10 p-2 rounded-2xl bg-neutral-900`}
        >
          <DayPicker
            mode="single"
            classNames={classNames}
            selected={dateReminder}
            onSelect={setDateReminder}
          />
          <div className="w-full flex gap-2 mt-1">
            <button
              onClick={handleClickRemind}
              className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
            >
              Close
            </button>

            <button
              onClick={changeRemind}
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
