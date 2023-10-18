import React from 'react'
import { SectionWrapper } from '../HOC'
import { technologies } from '../constants'
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

import { styles } from '../styles'


const Tech = () => {
    return (
        <>
        <motion.div variants={textVariant()}> 
                <h2 className={`${styles.sectionHeadText} mb-8` }>
                    Technical Skills.
                </h2>
            </motion.div>
                <div className='  flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className="w-28 h-28 p-2 m-1" key={technology.name}>
                    <>
                        <img src={technology.icon} alt={technology.namr} />
                        <motion.div variants={textVariant()}>
                            <p className={`${styles.sectionSubText} text-center text-[16px]`}>{technology.name}</p>
                        </motion.div>
                    </>

                </div>
            ))}
        </div>
        </>
     
    )
}

export default SectionWrapper(Tech, "")