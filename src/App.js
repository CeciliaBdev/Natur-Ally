import './style.scss'
import Contenthome from './components/Contenthome'
import Impots from './components/Impots'
import Navbar from './components/NavBar'
import NosServices from './components/NosServices'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contenthome />
      <NosServices />
      <Impots />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
