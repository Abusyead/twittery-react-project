import './App.css'
import EarthData from './Components/EarthSection'
import FineTuned from './Components/FineTuned'
import HeroArea from './Components/HeroArea'
import Navbar from './Components/Navbar'
import PricingPlans from './Components/PricingPlans'
import VideoSection from './Components/VideoSection'
import WorkSecton from './Components/WorkSecton'
import Customars from './Components/Customars'
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
          <PricingPlans />
          <Customars />
       </main>
    </>
  )
}

export default App
