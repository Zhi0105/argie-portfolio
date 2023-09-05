import { Link } from 'react-router-dom'
import RouteStore from '~_assets/Store/RouteStore'
import { motion } from 'framer-motion'
import { Initial } from '~_components/Lazy/LazyImage'
import _ from 'lodash'

export const Navbar = () => {

    const { route } = RouteStore(); // ROUTE STORE
    let routeDebounce = _.debounce(() => { return ;}, 500) // NAVIGATION HIDE within 0.5 sec if route === /

    if(route.pathname === '/') {
        return routeDebounce()
    }

  return (
    <div className='navbar_menu bg-[#1D1D1D] flex justify-between items-center text-sm md:hidden sm:hidden p-4 border-b-2'>
        <div>
        <Link to="/">
            <Initial width={50} height={50} />
        </Link>
        </div>
        <div className='menu_item flex flex-row gap-8 text-[#08FFD4] text-lg'>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/about">
                    About
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/skills">
                    Skills
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/works">
                    Work
                </Link>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}

            >
                <Link to="/contacts">
                    Contact
                </Link>
            </motion.div>
        </div>
    </div>  
  )
}
