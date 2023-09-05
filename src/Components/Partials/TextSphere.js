import TagCloud from 'TagCloud';
import React, { useEffect, useRef } from 'react'
import '~_assets/css/textsphere.css'

export const TextSphere = () => {
    const initialized = useRef(false)
    useEffect(() => {
      if (!initialized.current) {
        initialized.current = true
        const container = '.tagcloud';
        const texts = [
          "Html",
          "CSS",
          "JavaScript",
          "React",
          "Lavavel",
          "API",
          "JSON",
          "SQL",
          "NodeJS",
          "Nuxt",
          "NextJS",
          "Vue",
          "NodeJS",
          "React Native",
          "Ruby on Rails",
          "Wordpress",
          "Babel",
          "Jquery",
          "ES6",
          "Git",
        ];
    
        const options = {
          radius: 300 ,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          keep: true,
        };
        TagCloud(container, texts, options);      
      }
    }, []);
    
  return (
      <span className='tagcloud font-bold text-xl text-[#08FFD4]'></span>
    )
}
