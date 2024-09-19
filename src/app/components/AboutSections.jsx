"use client"
import React, { useState,useTransition } from 'react'
import TabButton from './TabButton'
import TAB_DATA from '../data/Tab_Data'


const AboutSections = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section className="text-primary dark:text-tertiary-300" id="about">
    <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <video src="/images/blueskyvideo4.mp4" width={500} height={500} autoPlay loop muted className='mx-auto'>
        Your browser does not support the video tag.
        </video>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold mb-4 dark:text-tertiary-500">About Me</h2>
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, Next, React, React Native/Expo Node.js, Express, MYSQL,
          HTML, CSS,Tailwind and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
        <div className="flex flex-row justify-start mt-8">
        <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
        </div>
        <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSections