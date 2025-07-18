import './App.css'
import EarthData from './Components/EarthSection'
import FineTuned from './Components/FineTuned'
import HeroArea from './Components/HeroArea'
import Navbar from './Components/Navbar'
import VideoSection from './Components/VideoSection'
import WorkSecton from './Components/WorkSecton'
function App() {

  return (
    <>
       <main className="text-white font-primary bg-[#030015]">
          <div>
            <Navbar />
            <HeroArea />
          </div>
          <FineTuned />
          <EarthData />
          <WorkSecton />
          <VideoSection />
       </main>
    </>
  )
}

export default App
