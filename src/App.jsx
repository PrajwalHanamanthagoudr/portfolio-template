import AppAppBar from './componenets/AppAppBar'
import './App.css'
import Hero from './componenets/Hero'
import ProfileSection from './componenets/ProfileSection'
import ServicesSection from './componenets/ServicesSection'
import AmazingWorkSection from './componenets/AmazingWorkSection'
import MyResume from './componenets/MyResume'
import WhatMyClientsSays from './componenets/WhatMyClientsSays'
import Footer from './componenets/Footer'


function App() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <ProfileSection />
      <ServicesSection />
      <AmazingWorkSection />
      <MyResume />
      <WhatMyClientsSays />
      <Footer />
</>
  )
}

export default App
