import React from 'react';
import "./Footer.scss"
import {FiGithub, FiLinkedin} from "react-icons/fi"
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="followMe">
        <h4>Check my</h4>
        <div className="stick"></div>
        <motion.a target= "_blank" href="https://github.com/Richardrodri26"
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                <motion.a target= "_blank" href="https://www.linkedin.com/in/richard-rodriguez-b91822188/"
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiLinkedin />
                </motion.a>
      </div>
    </motion.div>
  )
}

export default Footer