import { Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import FavoritesPage from './pages/FavoritesPage'
import CreateTask from './pages/CreateTask'
import NotFound404 from './pages/NotFound404'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default App
