import './App.css'
import FineTuned from './Components/FineTuned'
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
          <FineTuned />
       </main>
    </>
  )
}

export default App
