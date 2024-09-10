"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Languages",
      id: "languages",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>Python</li>
          <li>Javascript</li>
          <li>Processing</li>
        </ul>
      ),
    },
    {
      title: "Frameworks",
      id: "frameworks",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Bootstrap</li>
        </ul>
      ),
    },
    {
      title: "Services",
      id: "services",
      content: (
        <ul className="list-disc pl-2">
          <li>Postman</li>
          <li>MYSQL</li>
          <li>Atlassian Jira</li>
          <li>Git, Github</li>
          <li>Android Studio</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("languages");
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
                alt='work station'
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full" >
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                  Hi! I&apos;m Annas Isa, a passionate software engineer skilled in 
                  Java, Python, JavaScript, and frameworks like React and Node.js. 
                  I&apos;m currently working on innovative projects like MentorConnect, 
                  a mentorship platform with advanced cloud features and security.

                </p>
                <p>
                  Beyond my professional work, I&apos;ve developed a platformer game 
                  with Phaser.js and built a robust user management system using 
                  MySQL and Java. I&apos;m always exploring new tech trends and eager 
                  to tackle creative challenges.

                  Curious to learn more about my projects or discuss potential opportunities? Let&apos;s connect!


                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                    selectTab={() => handleTabChange("languages")}
                    active={tab === "languages"}
                    >
                    {" "}
                    Languages{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("frameworks")}
                    active={tab === "frameworks"}
                    >
                    {" "}
                    Frameworks{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("services")}
                    active={tab === "services"}
                    >
                    {" "}
                    Services{" "}
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