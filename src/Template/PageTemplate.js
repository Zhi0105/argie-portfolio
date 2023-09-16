import { motion  } from 'framer-motion'
export const PageTemplate = ({ children }) => {
  return (
    <>
    <motion.div 
      className='template_main shadow-current'
      >
      {children}
    </motion.div>
    </>
  )
}
