import React from 'react'
import HeroSectionV2 from './HeroSectionV2'
import AboutMe from './AboutMe'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-11'><HeroSectionV2/><AboutMe/></div>
  )
}

export default HomePage