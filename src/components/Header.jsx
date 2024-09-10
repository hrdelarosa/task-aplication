import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 ">
        <Link
          to="/"
          className="flex items-center gap-3 text-[#dbff5e] transition duration-300 ease-out hover:-translate-y-[3px] group"
        >
          <svg
            height="36px"
            viewBox="0 -960 960 960"
            width="36px"
            fill="currentColor"
            className="transition duration-300 ease-out group-hover:translate-x-2"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
          </svg>

          <span className="text-3xl font-bold">Task Application</span>
        </Link>

        <div className="flex justify-center items-center">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#ebff95] font-medium underline transition-colors duration-200 ease-in'
                    : 'text-[#fcffe5] font-medium transition-colors duration-200 ease-in cursor-pointer hover:text-[#DBFF5E]'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#ebff95] font-medium underline transition-colors duration-200 ease-in'
                    : 'text-[#fcffe5] font-medium transition-colors duration-200 ease-in hover:text-[#DBFF5E]'
                }
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#ebff95] font-medium underline transition-colors duration-200 ease-in'
                    : 'text-[#fcffe5] font-medium transition-colors duration-200 ease-in cursor-pointer hover:text-[#DBFF5E]'
                }
                to="/create"
              >
                Create Task
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={
                  'text-[#fcffe5] font-medium px-4 py-1.5 border-2 border-neutral-700 rounded-lg transition-colors duration-200 ease-in cursor-pointer hover:text-[#ebff95] hover:bg-neutral-800/60'
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  'text-[#121212] font-medium px-4 py-1.5 border-2 border-[#dbff5e] rounded-lg bg-[#dbff5e] transition-colors duration-200 ease-in cursor-pointer hover:text-[#DBFF5E] hover:bg-[#121212]'
                }
                to="/register"
              >
                Register
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#ebff95] font-medium underline transition-colors duration-200 ease-in'
                    : 'text-[#fcffe5] font-medium transition-colors duration-200 ease-in cursor-pointer hover:text-[#DBFF5E]'
                }
                to=""
              >
                Account
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}
