import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'

const MainLayout = () => {
  return (
    <div className="space-y-10 mx-12 mt-6">
      <Navbar />
      <Hero />
      <Overview />
    </div>
  )
}

export default MainLayout
