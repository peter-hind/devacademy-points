import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'

function App() {
  return (
    <>
    <div className='tile-top'></div>
    <div className="content">
      <div className="container">
        <Heading />
        <Form />
        <Comments />
      </div>
    </div>
    <div className='tile-bottom'></div>
    </>
  )
}

export default App
