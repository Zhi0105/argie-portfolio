import { motion  } from 'framer-motion'
import RouteStore from '~_assets/Store/RouteStore'
import { useState, useEffect } from 'react'
import { Preload } from '~_components/Lazy/Preload'
import { Particle } from '~_components/Particles/Particle'
import { Navbar } from '~_navigations/Navbar'
import _ from 'lodash'

export const PageTemplate = ({ children }) => {
  const { route } = RouteStore(); // ROUTE STORE
  const [loading, setLoading] = useState(false)

  useEffect(() => { // HANDLE PRELOADER WHEN ROUTE CHANGE
    if(route){
      setLoading(true)
      _.delay(() => {
        setLoading(false)
      }, 2500)
    }
  }, [route, setLoading])



  if(loading){
    return (
     <Particle>
       <Preload loading={loading}/>
     </Particle>
    )
  }

  return (
    <motion.div className='template_main shadow-current'>
      <Navbar />
      {children}
    </motion.div>
  )
}
