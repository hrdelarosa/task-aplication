import { useState } from "react"

export function useReminder({ remind_at }) {
  const [openRemind, setOpenRemind] = useState(false)
  const [dateReminder, setDateReminder] = useState(remind_at || null)

  function handleClickRemind() {
    setDateReminder(null)
    setOpenRemind(!openRemind)
  }
  
  function changeRemind() {
    setOpenRemind(!openRemind)
    setDateReminder(dateReminder)
  }

  function deleteRemind(e) {
    e.stopPropagation()
    setDateReminder(null)
  }

  return { dateReminder, setDateReminder, openRemind, setOpenRemind, handleClickRemind, changeRemind, deleteRemind }
}