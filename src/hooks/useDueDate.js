import { useState } from "react"

export function useDueDate({ due_date }) {
  const [openDueDate, setOpenDueDate] = useState(false)
  const [dueDate, setDueDate] = useState(due_date || null)

  function handleClickDueDate() {
    setDueDate(null)
    setOpenDueDate(!openDueDate)
  }

  function changeDueDate() {
    setOpenDueDate(!openDueDate)
    setDueDate(dueDate)
  }

  function deleteDueDate(e) {
    e.stopPropagation()
    setDueDate(null)
  }

  return { dueDate, setDueDate, openDueDate, setOpenDueDate, handleClickDueDate, changeDueDate, deleteDueDate }
}