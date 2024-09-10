import { useEffect, useState } from "react"
import { getTasks } from "../service/tasks"

export function useTasks() {
  const [allTasks, setAllTasks] = useState([])
  const [error, setError] = useState('')
  const [toogle, setToogle] = useState(false)

  useEffect(() => {
    fetchTasks()
  }, [toogle])
  
  function fetchTasks() {
    getTasks()
      .then((tasks) => {
        setAllTasks(tasks)
      })
      .catch((e) => {
        setError(e)
      })
  }

  function toogleRefreshTasks() {
    setToogle(!toogle)
  }

  return { allTasks, toogleRefreshTasks, error }
}