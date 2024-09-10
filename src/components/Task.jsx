import { useState } from 'react'

import Calendar from '../icons/Calendar'
import StarOutline from '../icons/StarOutline'
import Delete from '../icons/Delete'
import StarFilled from '../icons/StarFilled'
import TaskBar from './TaskBar'

import { updateFavoriteTask } from '../service/updateFavoriteTask.js'
import { taskDelete } from '../service/deleteTasks.js'
import { updateStatus } from '../service/updateStatus.js'
import UncheckedFavorite from '../icons/UncheckedFavorite.jsx'
import CheckedFavorite from '../icons/CheckedFavorite.jsx'
import { compareDates } from '../logic/compareDates.js'

export default function Task({
  id,
  title,
  descripcion,
  due_date,
  favorite,
  status,
  created_at,
  remind_at,
  toogleRefreshTasks,
}) {
  const [open, setOpen] = useState(false)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  function handleClick() {
    setOpen(!open)
  }

  function changeFavorite(e) {
    e.stopPropagation()

    updateFavoriteTask({ favorite: favorite === 1 ? 0 : 1, id })
    toogleRefreshTasks()
  }

  function handleDelete(e) {
    e.stopPropagation()

    taskDelete({ id })
    toogleRefreshTasks()
  }

  function changeStatus(e) {
    e.stopPropagation()

    setOpen(false)
    updateStatus({ status: status === 'pending' ? 'completed' : 'pending', id })
    toogleRefreshTasks()
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer min-h-[72px] p-3 bg-neutral-800 transition-colors duration-300 ease-in-out hover:bg-neutral-700 rounded-lg"
      >
        <div className="flex flex-col gap-1">
          <h3
            className={`text-xl font-semibold text-[#ebff95] ${
              status === 'completed' && 'line-through'
            }`}
          >
            {title}
          </h3>
          <div className="flex gap-1 items-center text-[#fefee8]">
            {status === 'completed' ? (
              <></>
            ) : (
              due_date && (
                <>
                  <Calendar />
                  <span
                    className={`text-xs ${
                      due_date
                        ? compareDates(due_date) === false && 'line-through'
                        : 'text-[#fefee8]'
                    }`}
                  >
                    {due_date.toLocaleDateString('en-US', options)}
                  </span>
                </>
              )
            )}
          </div>
        </div>

        <div className="flex gap-3 items-center text-gray-300">
          <button
            onClick={handleDelete}
            className="text-[#fefee8] hover:text-[#ebff95] hover:scale-110 transition duration-500 ease-out"
          >
            <Delete />
          </button>
          <button
            onClick={changeStatus}
            className="group text-[#fefee8] hover:scale-110 transition duration-500 ease-out"
          >
            {status === 'pending' ? <UncheckedFavorite /> : <CheckedFavorite />}
          </button>
          <button
            onClick={changeFavorite}
            className="text-[#fefee8] hover:text-[#ebff95] hover:scale-110 transition duration-500 ease-out"
          >
            {favorite ? <StarFilled /> : <StarOutline />}
          </button>
        </div>
      </div>

      {open ? (
        <TaskBar
          id={id}
          title={title}
          descripcion={descripcion}
          favorite={favorite}
          created_at={created_at}
          status={status}
          remind_at={remind_at}
          due_date={due_date}
          asideBar={
            <div className="bg-neutral-900/30" onClick={handleClick}></div>
          }
          closeBar={
            <button
              onClick={handleClick}
              className={`p-1 rounded-[4px] cursor-pointer transition-colors duration-300 ease-out hover:bg-neutral-700`}
            >
              <Delete width="20px" height="20px" />
            </button>
          }
          changeFavorite={changeFavorite}
          handleDelete={handleDelete}
          changeStatus={changeStatus}
          toogleRefreshTasks={toogleRefreshTasks}
          handleClose={handleClick}
        />
      ) : (
        <></>
      )}
    </>
  )
}
