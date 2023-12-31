import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Comments from './components/Comments'
import Form from './components/Form'
import StudentsPage from './components/StudentsPage'
import TeachersPage from './components/TeachersPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Comments />} />
      <Route path="/history" element={<Comments />} />
      <Route path="/award" element={<Form />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
    </Route>,
  ),
)

export default router
