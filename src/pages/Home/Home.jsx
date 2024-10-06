import React from 'react'
import About from '../../components/About/About'
import Title from '../../components/Title/Title'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'

function Home() {
  return (
    <div>
      <div id="title">
        <Title />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  )
}

export default Home