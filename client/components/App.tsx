import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'
import Profile from './Profile'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Heading />
        <Form />
        <Comments />
        <Profile />
      </div>
    </div>
  )
}

export default App
