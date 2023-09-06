import { useEffect } from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import RouteStore from '~_assets/Store/RouteStore'

// SCreen
import { LandingPageScreen } from '~_components/Screens/LandingPageScreen'
import { AboutScreen } from '~_components/Screens/AboutScreen'
import { SkillScreen } from '~_components/Screens/SkillScreen'
import { WorkScreen } from '~_components/Screens/WorkScreen'
import { ContactScreen } from '~_components/Screens/ContactScreen'

export const RouteList = () => {
  const location = useLocation()
  const { setRoute } = RouteStore();

  useEffect(() => {
    setRoute(location)
      // eslint-disable-next-line
  }, [location])
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPageScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skill" element={<SkillScreen />} />
        <Route path="/work" element={<WorkScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </AnimatePresence>
  )
}
