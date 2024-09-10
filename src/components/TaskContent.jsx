import Task from './Task'

export default function TaskContent({ tasks, toogleRefreshTasks }) {
  return (
    <div className="flex flex-col flex-grow overflow-y-auto overflow-x-hidden gap-2 h-0 rounded-lg scrol">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          descripcion={task.description}
          due_date={task.due_date ? new Date(task.due_date) : task.due_date}
          favorite={task.favorite}
          status={task.status}
          created_at={new Date(task.created_at)}
          remind_at={task.remind_at ? new Date(task.remind_at) : task.remind_at}
          toogleRefreshTasks={toogleRefreshTasks}
        />
      ))}
    </div>
  )
}
