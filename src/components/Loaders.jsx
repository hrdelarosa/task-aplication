import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Loaders() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timerLoader = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(timerLoader)
  }, [])

  function refreshPage() {
    navigate(0)
  }

  return (
    <section className="h-full flex justify-center items-center">
      {isLoading ? (
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-5 bg-[#dbff5e] animate-pulse h-5 rounded-full animate-bounce"></div>
          <div className="w-5 animate-pulse h-5 bg-[#ebff95] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 animate-pulse bg-[#f6ffc7] rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-7 text-[#dbff5e]">
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl font-bold">
              An error occurred, try again later
            </h1>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
            </svg>
          </div>

          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-bug"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4a4 4 0 0 1 3.995 3.8l.005 .2a1 1 0 0 1 .428 .096l3.033 -1.938a1 1 0 1 1 1.078 1.684l-3.015 1.931a7.17 7.17 0 0 1 .476 2.227h3a1 1 0 0 1 0 2h-3v1a6.01 6.01 0 0 1 -.195 1.525l2.708 1.616a1 1 0 1 1 -1.026 1.718l-2.514 -1.501a6.002 6.002 0 0 1 -3.973 2.56v-5.918a1 1 0 0 0 -2 0v5.917a6.002 6.002 0 0 1 -3.973 -2.56l-2.514 1.503a1 1 0 1 1 -1.026 -1.718l2.708 -1.616a6.01 6.01 0 0 1 -.195 -1.526v-1h-3a1 1 0 0 1 0 -2h3.001v-.055a7 7 0 0 1 .474 -2.173l-3.014 -1.93a1 1 0 1 1 1.078 -1.684l3.032 1.939l.024 -.012l.068 -.027l.019 -.005l.016 -.006l.032 -.008l.04 -.013l.034 -.007l.034 -.004l.045 -.008l.015 -.001l.015 -.002l.087 -.004a4 4 0 0 1 4 -4zm0 2a2 2 0 0 0 -2 2h4a2 2 0 0 0 -2 -2z" />
          </svg>

          <button
            onClick={refreshPage}
            className="bg-[#dbff5e] text-[#121212] border-2 border-[#dbff5e] font-bold px-4 py-2 text-lg rounded-lg transition-colors duration-300 ease-out hover:bg-[#121212] hover:text-[#dbff5e]"
          >
            Try again
          </button>
        </div>
      )}
    </section>
  )
}
