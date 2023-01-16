import React, { useState } from 'react'
import "./Skills.scss";
import { icons } from '../../../Data';
import { experiences } from '../../../Data';
import { motion } from 'framer-motion';
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <span>¿Que tecnologias uso?</span>
        <h1>Habilidades y Educacion</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Habilidades</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Educacion</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="skills"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
    </div>
  )
}

export default Skills