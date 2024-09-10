import LayoutSign from '../layouts/LayoutSign'

export default function Login() {
  return (
    <LayoutSign>
      <div className="flex flex-col justify-center items-center h-full">
        <section className="w-96 rounded-lg bg-neutral-800 text-[#fcffe5] p-5">
          <h3 className="text-3xl font-semibold">Login</h3>
          <div>
            <label
              htmlFor="taskName"
              className="block text-[#fcffe5] font-semibold text-xl"
            >
              Task
              <input
                id="taskName"
                type="text"
                name="taskName"
                placeholder="Submit project report"
                className={`block bg-neutral-800 w-full rounded-lg mt-2 py-1.5 px-1.5 border border-transparent ring-1 ring-inset ring-neutral-800 focus:text-[#fcffe5]`}
              />
            </label>
          </div>
        </section>
      </div>
    </LayoutSign>
  )
}
