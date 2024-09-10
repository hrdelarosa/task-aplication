import Reminder from './Reminder'
import DueDate from './DueDate'
import StarOutline from '../icons/StarOutline'
import StarFilled from '../icons/StarFilled'
import ClipboardCheck from '../icons/ClipboardCheck'
import TagFovorite from '../icons/TagFavorite'
import Trash from '../icons/Trash'

import { capitalizeFirstLetter } from '../logic/capitalizeFirstLetter'
import { taskCreated } from '../logic/taskcreated'
import UncheckedFavorite from '../icons/UncheckedFavorite'
import CheckedFavorite from '../icons/CheckedFavorite'
import { useState } from 'react'
import Check from '../icons/Check'
import { updateTask } from '../service/updateTask'

export default function TaskBar({
  id,
  title,
  descripcion,
  favorite,
  created_at,
  status,
  remind_at,
  due_date,
  asideBar,
  closeBar,
  changeFavorite,
  handleDelete,
  changeStatus,
  toogleRefreshTasks,
  handleClose,
}) {
  const [upTitle, setUpTitle] = useState('')
  const [upDescripcion, setUpDescripcion] = useState('')

  const handleTitleChange = (event) => {
    setUpTitle(event.target.innerText)
  }

  const handleDescriptionChange = (event) => {
    setUpDescripcion(event.target.innerText)
  }

  const bandera = upTitle.length === 0 && upDescripcion.length === 0

  function taskUpdate() {
    updateTask({ upTitle, upDescripcion, id })
    handleClose()
    toogleRefreshTasks()
  }

  return (
    <div className={`absolute w-full top-0 start-0 taskBar`}>
      {asideBar}
      <aside className="w-[385px] h-screen p-5 bg-neutral-900 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center my-3 p-1">
            <span className="text-sm font-semibold ">
              {capitalizeFirstLetter(status)}
            </span>
            {closeBar}
          </div>

          <div className="flex flex-col gap-2 p-3 py-4 rounded-lg bg-neutral-800">
            <h2
              contentEditable
              className="text-xl font-semibold w-fit p-0.5 rounded-[4px] focus:outline-2 focus:outline focus:outline-neutral-500"
              onInput={handleTitleChange}
              suppressContentEditableWarning
            >
              {title}
            </h2>
            <p
              contentEditable
              className="text-base w-fit p-0.5 rounded-[4px] focus:outline-2 focus:outline focus:outline-neutral-500"
              onInput={handleDescriptionChange}
              suppressContentEditableWarning
            >
              {descripcion}
            </p>
          </div>

          <div className="flex flex-col bg-neutral-800 rounded-lg">
            <div
              onClick={changeStatus}
              className={`flex justify-between items-center font-medium p-4 rounded-lg cursor-pointer hover:bg-neutral-700 ${
                status === 'completed' && 'text-[#ebff95]'
              }`}
            >
              <div className="flex gap-1">
                <ClipboardCheck />
                <span>{capitalizeFirstLetter(status)}</span>
              </div>
              <div className="group">
                {status === 'pending' ? (
                  <UncheckedFavorite />
                ) : (
                  <CheckedFavorite />
                )}
              </div>
            </div>

            <hr className="mx-4 border-gray-600 opacity-45" />

            <div
              onClick={changeFavorite}
              className={`flex justify-between items-center font-medium p-4 rounded-lg cursor-pointer hover:bg-neutral-700 ${
                favorite && 'text-[#ebff95]'
              }`}
            >
              <div className="flex gap-1">
                <TagFovorite />
                <span>Favorite</span>
              </div>
              <div className="hover:text-[#ebff95]">
                {favorite ? (
                  <StarFilled width="20px" height="20px" />
                ) : (
                  <StarOutline width="20px" height="20px" />
                )}
              </div>
            </div>

            <hr className="mx-4 border-gray-600 opacity-45" />

            <Reminder
              id={id}
              remind_at={remind_at}
              toogleRefreshTasks={toogleRefreshTasks}
            />

            <hr className="mx-4 border-gray-600 opacity-45" />

            <DueDate
              id={id}
              due_date={due_date}
              toogleRefreshTasks={toogleRefreshTasks}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium">Created {taskCreated(created_at)}</p>

          <div className="flex gap-1">
            <button
              onClick={taskUpdate}
              disabled={bandera}
              className="disabled:text-red-600 disabled:hover:text-white disabled:hover:bg-red-700/70 disabled:cursor-not-allowed p-2 rounded-[4px] cursor-pointer transition-colors duration-300 ease-out hover:bg-neutral-700"
            >
              <Check />
            </button>

            <button
              onClick={handleDelete}
              className="p-2 rounded-[4px] cursor-pointer transition-colors duration-300 ease-out hover:bg-neutral-700"
            >
              <Trash />
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
