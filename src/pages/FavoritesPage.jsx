import Layout from '../layouts/Latout'
import TaskContainer from '../components/TaskContainer'

import { useFavoritesTask } from '../hooks/useFavoritesTasks'
import { useFilterTasks } from '../hooks/useFilterTasks'
import Loaders from '../components/Loaders'

export default function FavoritesPage() {
  const { tasksFavorites, toogleFavorite, error } = useFavoritesTask()
  const { progressTasks, completedTask } = useFilterTasks({
    tasks: tasksFavorites,
  })

  return (
    <Layout>
      <h1 className="text-3xl font-medium mt-1">Favorite Tasks</h1>

      {error ? (
        <Loaders />
      ) : (
        <TaskContainer
          progressTasks={progressTasks}
          completedTask={completedTask}
          toogleRefreshTasks={toogleFavorite}
        />
      )}
    </Layout>
  )
}
