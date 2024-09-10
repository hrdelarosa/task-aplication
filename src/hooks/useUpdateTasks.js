import { useState } from "react"
// import { updateReminder } from "../service/updateReminder"
import { formattedDate } from "../logic/formattedDate"

export function useUpdateTasks({ dates, id, toogleRefreshTasks, updateDates }) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(dates || null)

  function handleClick() {
    setDate(dates)
    setOpen(!open)
  }

  function changeRemind() {
    setOpen(!open)
    // updateReminder({ date: formattedDate(date), id })
    updateDates({ date: formattedDate(date), id })
    toogleRefreshTasks()
  }

  function deleteRemind(e) {
    e.stopPropagation()
    setDate(null)
    // updateReminder({ date: null, id })
    updateDates({ date: null, id })
    toogleRefreshTasks()
  }

  function handleDateChange(selectedDate) {
    setDate(selectedDate)
  }

  return { open, date, handleClick, changeRemind, deleteRemind, handleDateChange }
}