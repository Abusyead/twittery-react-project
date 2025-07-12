import './App.css'
import HeroArea from './Components/HeroArea'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
       <main className="text-white font-primary bg-black">
          <div>
            <Navbar />
            <HeroArea />
          </div>
          
       </main>
    </>
  )
}

export default App
