import { TechnicalSkills } from "~_components/Partials/TechnicalSkills"
import { Roadmap } from "~_components/Partials/Roadmap"
import { DevSkill } from "~_components/Partials/DevSkill"

export const Skill = () => {
  return (
    <div className='skill_main bg-[#1D1D1D] min-h-screen grid grid-cols-1 justify-center'>
      <section className='flex flex-col'>
        <div className='py-8 text-center flex flex-col'>
            <label className='text-2xl font-bold text-[#08FFD4]'>My Skills</label>
            <label className='text-sm text-white'>I Like to Craft Beautiful And Scalable Web Products</label>
        </div>
        <div className='w-full grid grid-cols-2'>
          <div className='roadmap_section flex justify-center'>
              <div className='py-4 px-6 w-full text-center flex flex-col'>
                <label className='text-xl font-bold text-[#08FFD4]'>What I do ?</label>
                <DevSkill />
                <Roadmap />
              </div>
          </div>
          <div className='technical_section flex justify-center'>
              <div className='py-4 px-6 w-full text-center flex flex-col'>
                <label className='text-xl font-bold mb-5 text-[#08FFD4]'>Technical Skills</label>
                <TechnicalSkills />
              </div>
          </div>
        </div>
      </section> 
    </div>
  )
} 
