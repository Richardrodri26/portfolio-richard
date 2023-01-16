import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>¿Quien soy?</span>
        <h1>Acerca de mi</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Competente en la desarrollo y diseño de aplicaciones web, con experiencia en la codificación y funcionalidad de proyectos con React, Tailwind, Sass y lenguajes de programación como Javascript. Me destaco por ser una persona proactiva, dinámica, con capacidad de gestión, organizaciòn y trabajo en equipo.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a target="_blank" href='https://docdro.id/TDukxg3'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Ver mi CV
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About