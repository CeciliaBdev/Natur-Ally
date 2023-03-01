import './App.css'
import Contenthome from './components/Contenthome'
import Gallerie from './components/Gallerie'
import Impots from './components/Impots'
import Navbar from './components/NavBar'
import NosServices from './components/NosServices'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contenthome />
      <NosServices />
      <Impots />
      {/* <Gallerie /> */}
      <Contact />
    </div>
  )
}

export default App
