import StarFilled from '../icons/StarFilled'
import StarOutline from '../icons/StarOutline'
import TagFovorite from '../icons/TagFavorite'
import UncheckedFavorite from '../icons/UncheckedFavorite'
import Layout from '../layouts/Latout'
import Delete from '../icons/Delete'
import Clock from '../icons/Clock'
import { compareDates } from '../logic/compareDates'
import { DayPicker } from 'react-day-picker'
import classNames from '../style.module.css'
import CalendarExpir from '../icons/CalendarExpir'
import Calendar from '../icons/Calendar'

import { useNavigate } from 'react-router-dom'
import { useReminder } from '../hooks/useReminder'
import { useDueDate } from '../hooks/useDueDate'
import { useNewTask } from '../hooks/useNewTask'
import { createTask } from '../service/createTask'
import { formattedDate } from '../logic/formattedDate'

export default function CreateTask() {
  const {
    title,
    updateTitle,
    description,
    updateDescription,
    favorite,
    updateFavorite,
    error,
  } = useNewTask()
  const {
    dateReminder,
    setDateReminder,
    handleClickRemind,
    changeRemind,
    deleteRemind,
    openRemind,
  } = useReminder({
    remind_at: null,
  })
  const {
    dueDate,
    setDueDate,
    handleClickDueDate,
    changeDueDate,
    deleteDueDate,
    openDueDate,
  } = useDueDate({ due_date: null })
  const navigate = useNavigate()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title || title.length < 3) return

    cleanUp()
    createTask({
      title,
      description,
      due_date: formattedDate(dueDate),
      status: 'pending',
      favorite,
      remind_at: formattedDate(dateReminder),
    })

    navigate('/')
  }

  const changeTitle = (event) => {
    const titleTask = event.target.value
    updateTitle(titleTask)
  }

  const changeDescription = (event) => {
    const description = event.target.value
    updateDescription(description)
  }

  const changeFavorite = (event) => {
    const favoriteTask = event.target.checked
    updateFavorite(favoriteTask)
  }

  function cleanUp() {
    updateTitle('')
    updateDescription('')
    updateFavorite(false)
    setDateReminder(null)
    setDueDate(null)
  }

  function cancel() {
    cleanUp()
    navigate('/')
  }

  return (
    <Layout>
      <h1 className="text-4xl font-medium text-center mt-4 mb-8">
        Create a New Task
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-grow gap-10"
      >
        <div className="flex flex-col gap-8 w-[425px]">
          <div>
            <label
              htmlFor="taskName"
              className="block text-[#fcffe5] font-semibold text-2xl"
            >
              Task
              <input
                id="taskName"
                type="text"
                name="taskName"
                value={title}
                onChange={changeTitle}
                placeholder="Submit project report"
                className={`block bg-neutral-800 w-full rounded-lg mt-2 py-3 text-xl px-2 border border-transparent ring-1 ring-inset ring-neutral-800 focus:text-[#fcffe5]
                  ${error ? 'border-red-600' : 'border-transparent'}`}
              />
            </label>
            {error && <p className="absolute text-red-600">{error}</p>}
          </div>

          <label
            className={`flex justify-between items-center bg-neutral-800 font-medium p-4 rounded-lg cursor-pointer hover:bg-neutral-700 ${
              favorite && 'text-[#ebff95]'
            }`}
          >
            <input
              className="hidden"
              type="checkbox"
              name="favorite"
              id="favorite"
              checked={favorite}
              onChange={changeFavorite}
            />
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
          </label>

          <div
            onClick={handleClickRemind}
            className={`flex gap-1 items-center justify-between bg-neutral-800 font-medium p-4 rounded-lg hover:bg-neutral-700 ${
              dateReminder
                ? compareDates(dateReminder)
                  ? 'text-[#ebff95]'
                  : 'text-red-500'
                : 'text-white'
            }`}
          >
            {dateReminder ? (
              <div className="flex gap-1 items-center justify-center">
                <Clock />
                <span className="font-normal">
                  {dateReminder.toDateString()}
                </span>
              </div>
            ) : (
              <div className="flex gap-1 items-center justify-center">
                <Clock />
                <span>Reminder</span>
              </div>
            )}
            {dateReminder && (
              <div
                onClick={deleteRemind}
                className="cursor-pointer transition duration-500 ease-in-out hover:rotate-180 hover:scale-110"
              >
                <Delete width="20px" height="20px" />
              </div>
            )}
          </div>
          <div
            className={`absolute inset-0 bg-transparent ${
              openRemind ? 'block' : 'hidden'
            }`}
          >
            <div
              className={`absolute bottom-24 right-[300px] z-10 p-2 rounded-2xl bg-neutral-900`}
            >
              <DayPicker
                mode="single"
                classNames={classNames}
                selected={dateReminder}
                onSelect={setDateReminder}
              />
              <div className="w-full flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={handleClickRemind}
                  className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={changeRemind}
                  className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={handleClickDueDate}
            className={`flex gap-1 items-center justify-between bg-neutral-800 font-medium p-4 rounded-lg hover:bg-neutral-700 ${
              dueDate
                ? compareDates(dueDate)
                  ? 'text-[#ebff95]'
                  : 'text-red-500'
                : 'text-white'
            }`}
          >
            {dueDate ? (
              <div className="flex gap-1 items-center justify-center">
                <CalendarExpir />
                <span className="font-normal">{dueDate.toDateString()}</span>
              </div>
            ) : (
              <div className="flex gap-1 items-center justify-center">
                <CalendarExpir />
                <span>Due date</span>
              </div>
            )}
            {dueDate && (
              <div
                onClick={deleteDueDate}
                className="cursor-pointer transition duration-500 ease-in-out hover:rotate-180 hover:scale-110"
              >
                <Delete width="20px" height="20px" />
              </div>
            )}
          </div>
          <div
            className={`absolute inset-0 bg-transparent ${
              openDueDate ? 'block' : 'hidden'
            }`}
          >
            <div
              className={`absolute bottom-24 right-[300px] z-10 p-2 rounded-2xl bg-neutral-900`}
            >
              <DayPicker
                mode="single"
                classNames={classNames}
                selected={dueDate}
                onSelect={setDueDate}
              />
              <div className="w-full flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={handleClickDueDate}
                  className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={changeDueDate}
                  className="w-full p-1 rounded-lg bg-[#ebff95] text-neutral-800 font-semibold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-[#dbff5e] text-[#121212] border-2 border-[#dbff5e] font-medium px-4 py-2 text-base rounded-lg transition-colors duration-300 ease-out hover:bg-[#121212] hover:text-[#dbff5e]">
            Create
          </button>
        </div>

        <div className="flex flex-col w-[630px] gap-8">
          <div>
            <label
              htmlFor="taskDescription"
              className="block text-[#fcffe5] font-semibold text-2xl"
            >
              Description
            </label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={description}
              onChange={changeDescription}
              placeholder="El informe del proyecto se presentara el dia 23 de este mes. Esto sera en el auditorio de la faculta."
              className="block bg-neutral-800 w-full h-48 rounded-lg mt-2 resize-none py-1.5 text-xl px-2 ring-1 ring-inset ring-neutral-800  focus:text-[#fcffe5]"
              rows="4"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <p className="block text-[#fcffe5] font-semibold text-2xl">
              Task Visualization
            </p>

            <div
              // onClick={handleClick}
              className="flex justify-between items-center min-h-[72px] p-3 bg-neutral-800 transition-colors duration-300 ease-in-out hover:bg-neutral-700 rounded-lg"
            >
              <div className="flex flex-col gap-1">
                <h3 className={`text-xl font-semibold text-[#ebff95]`}>
                  {title}
                </h3>
                <div className="flex gap-1 items-center text-[#fefee8]">
                  {dueDate ? (
                    <>
                      <Calendar />
                      <span className={`text-xs`}>
                        {new Date(dueDate).toLocaleDateString('en-US', options)}
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex gap-3 items-center text-gray-300">
                <button className="text-[#fefee8] hover:text-[#ebff95] hover:scale-110 transition duration-500 ease-out">
                  <Delete />
                </button>
                <button className="group text-[#fefee8] hover:scale-110 transition duration-500 ease-out">
                  <UncheckedFavorite />
                </button>
                <button className="text-[#fefee8] hover:text-[#ebff95] hover:scale-110 transition duration-500 ease-out">
                  {favorite ? <StarFilled /> : <StarOutline />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-5">
            <button
              disabled={title.length > 0 ? false : true}
              onClick={cleanUp}
              className={`${
                title.length < 1 && 'cursor-not-allowed'
              } text-[#dbff5e] border-2 border-neutral-800 font-medium px-4 py-2 text-base rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800 hover:text-[#dbff5e]`}
            >
              Limpiar
            </button>
            <button
              onClick={cancel}
              className=" text-[#fcffe5] border-2 border-[#121212] font-medium px-4 py-2 text-base rounded-lg transition-colors duration-300 ease-out hover:border-[#f6ffc7] hover:text-[#f6ffc7]"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
