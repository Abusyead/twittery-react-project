import './App.css'
import EarthData from './Components/EarthSection'
import FineTuned from './Components/FineTuned'
import HeroArea from './Components/HeroArea'
import Navbar from './Components/Navbar'
import PricingPlans from './Components/PricingPlans'
import VideoSection from './Components/VideoSection'
import WorkSecton from './Components/WorkSecton'
import Customars from './Components/Customars'
import AskedQuestions from './Components/AskedQuestions'
import Community from './Components/Community'
import Footer from './Components/Footer'
import DobleColor from './Components/Common/DobleColor'
function App() {

  return (
    <>
       <main className="text-white font-primary bg-[#030015]">
          <Navbar />
          <HeroArea />
          <FineTuned />
          <EarthData />
          <WorkSecton />
          <VideoSection />
          <PricingPlans />
          <Customars />
          <AskedQuestions />
          <Community />
          <Footer />
       </main>
    </>
  )
}

export default App
