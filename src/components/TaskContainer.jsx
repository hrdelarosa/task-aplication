import TaskContent from './TaskContent'

export default function TaskContainer({
  progressTasks,
  completedTask,
  toogleRefreshTasks,
}) {
  return (
    <section className="grid grid-cols-2 flex-grow gap-5 mt-7">
      <div className="flex flex-col h-full gap-2">
        <header className="mb-3">
          <span className="text-2xl font-medium">Tasks</span>
        </header>

        <TaskContent
          tasks={progressTasks}
          toogleRefreshTasks={toogleRefreshTasks}
        />
      </div>

      <div className="flex flex-col h-full gap-2">
        <header className="mb-3">
          <span className="text-2xl font-medium">Completed</span>
        </header>

        <TaskContent
          tasks={completedTask}
          toogleRefreshTasks={toogleRefreshTasks}
        />
      </div>
    </section>
  )
}
