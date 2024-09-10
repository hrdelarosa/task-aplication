import { useEffect, useState } from "react"
import { filterTasksCompleted, filterTasksProgress } from "../logic/filterTasks"

export function useFilterTasks({ tasks }) {
  const [progressTasks, setProgressTasks] = useState([])
  const [completedTask, setCompletedTask] = useState([])

  useEffect(() => {
    setProgressTasks(filterTasksProgress(tasks))
    setCompletedTask(filterTasksCompleted(tasks))
  }, [tasks])

  return { progressTasks, completedTask }
}