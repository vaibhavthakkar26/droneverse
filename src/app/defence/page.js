'use client'
import React from 'react'
import DefenceHero from '../components/Defence/DefenceHero/page'
import DefenceProducts from '../components/Defence/Products/page'
import RattlerProduct from '../components/Defence/RattlerProduct/page'
import AndhkarSection from '../components/Defence/AndhkarSection/page'
import GDSDrones from '../components/Defence/GDSDrone/page'

const Defence = () => {
  return (
    <div className='pt-[72px]'>
      <DefenceHero />
      <DefenceProducts />
      <RattlerProduct />
      <AndhkarSection />
      <GDSDrones />
    </div>  
  )
}

export default Defence
