import { Link } from 'react-router-dom'
import Layout from '../layouts/Latout'

export default function NotFound404() {
  return (
    <Layout>
      <div className="absolute flex justify-between w-[1280px]  text-[#DBFF5E]"></div>

      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-semibold text-[#ebff95] text-center">
            Ah shit, here we go again
          </span>

          <span className="text-[300px] font-extrabold text-[#DBFF5E]">
            404
          </span>

          <div className="text-[#ebff95]">
            <span className="text-sm">ERROR</span>
            <p className="text-lg font-semibold">
              Sorry, but this page dont
              <br /> exist. Please try again
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between items-center text-[#DBFF5E] my-4">
          <h2 className="text-8xl">Not Found!</h2>

          <div>
            <Link
              to="/"
              className="gap-1 p-3 rounded-lg bg-neutral-800 flex items-center text-lg group self-end"
            >
              <div className="transition duration-500 ease-in-out -rotate-45 group-hover:rotate-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </div>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
