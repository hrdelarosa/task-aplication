import Layout from '../layouts/Latout'
import TaskContainer from '../components/TaskContainer'

import { useFilterTasks } from '../hooks/useFilterTasks'
import { useTasks } from '../hooks/useTasks'
import Loaders from '../components/Loaders'

export default function TasksPage() {
  const { allTasks, toogleRefreshTasks, error } = useTasks()
  const { progressTasks, completedTask } = useFilterTasks({ tasks: allTasks })

  return (
    <Layout>
      {error ? (
        <Loaders />
      ) : (
        <TaskContainer
          progressTasks={progressTasks}
          completedTask={completedTask}
          toogleRefreshTasks={toogleRefreshTasks}
        />
      )}
    </Layout>
  )
}
