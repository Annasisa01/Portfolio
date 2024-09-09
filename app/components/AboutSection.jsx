"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 px-4 sm:py-16 xl:px-16'>
            <Image 
                src="/images/workstation.png"
                width={500}
                height={500}
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full" >
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                  Hi! I’m Annas Isa, a passionate software engineer skilled in 
                  Java, Python, JavaScript, and frameworks like React and Node.js. 
                  I’m currently working on innovative projects like MentorConnect, 
                  a mentorship platform with advanced cloud features and security.

                </p>
                <p>
                  Beyond my professional work, I’ve developed a platformer game 
                  with Phaser.js and built a robust user management system using 
                  MySQL and Java. I’m always exploring new tech trends and eager 
                  to tackle creative challenges.

                  Curious to learn more about my projects or discuss potential opportunities? Let’s connect!


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
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection