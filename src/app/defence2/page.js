'use client'
import React from 'react'
import HeroDefenceSection from '../components/Defence2/DefenceHero/page'
import IronGridSection from '../components/Defence2/DvIronGrid/page'
import HoursSection from '../components/Defence2/DvHours/page'
import RattlerSection from '../components/Defence2/DvRattler/page'
import AndhkaarSection from '../components/Defence2/DvAndhkaar/page'
import GdsSection from '../components/Defence2/GDSDrone/page'

const Defence2 = () => {
    return (
        <div className='pt-[72px]'>
            <HeroDefenceSection />
            <HoursSection />
            <IronGridSection />
            {/* <RattlerSection /> */}
            {/* <AndhkaarSection /> */}
            {/* <GdsSection /> */}
        </div>
    )
}

export default Defence2
