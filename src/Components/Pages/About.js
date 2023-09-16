import { TextSphere } from '~_partials/TextSphere'
import { IteratedText } from '~_components/Partials/IteratedText'

export const About = () => {
  return (
    <div className='about_main min-h-screen flex flex-col'>
        <div className='w-[100vw] flex flex-row'>
            <div className='w-[50%] flex flex-col gap-8 py-16 px-32'>
                <IteratedText 
                  text="Me, Myself & I" 
                  styles="greet_detail text-[#08FFD4] flex flex-row font-bold text-6xl"
                />
                
                <p className='indent-8 text-white'>
                  I want to obtain the position that I can use to develop my knowledge and skills through modern technologies and to provide strong contribution in company's goal that will help to the development and to provide the best opportunity and achievements.
                </p>
                <p className='indent-8 text-white'>
                Well-organised person, problem solver, independent employee with high attention to detail. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p>
                <p className='indent-8 text-white'>
                Interested in the entire frontend/backend spectrum and working on ambitious projects with positive people.
                </p>
            </div>
            <div className='w-[50%]'>
                <center>
                  <TextSphere />
                </center>
            </div>            
        </div>
    </div>
  )
}
