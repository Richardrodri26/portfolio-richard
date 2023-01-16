import React from 'react'
import portfolio from "../../../assets/portfolio.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hola, soy <span>Richard Rodríguez</span> </h3>
        <span className='job'>Front-end Developer</span>
        <span className='text'>Apasionado<br /> de crear productos web <br />  innovadores.</span>
        <motion.a
          target="_blank"
          href="https://docdro.id/TDukxg3"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Ver mi CV</motion.a>
        <div
          className="web"

        >
          Web Developer
        </div>
        <div
          className="ui"
        >
          Sass
        </div>
        <div
          className="freelance"
        >
          React
        </div>
      </div>
    </motion.div>
  )
}

export default Home