import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Projects"
import Bio from "./Bio"
import Welcome from "./Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
  <>
    <Header/>
    <Welcome/>
    <Bio/>
    <Projects/>
    <Footer/>
  </>
  )
}

export default App
