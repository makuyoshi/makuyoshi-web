import React from 'react';
import {Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Chip, ScrollShadow, Tab, Tabs} from "@nextui-org/react";
import {
    IconBrandHtml5,
    IconBrandReact,
    IconBrandJavascript,
    IconBrandCss3,
    IconBrandBootstrap,
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandFramerMotion,
    IconBrandNodejs,
    IconBrandGit,
    IconBrandNpm,
    IconSparkles,
    IconClock,
    IconNotes,
    IconCode,
    IconBrandTypescript
} from "@tabler/icons-react"

export default function AboutMe() {

    const borderClassName = "shadow-none bg-opacity-25"
    const headerStyling = "font-medium text-2xl md:text-3xl xl:text-4xl"
    const textStyling = "text-xl"

    return (
        <>
            <div className="flex justify-center xl:h-[500px]">
                <div className="flex flex-col">
                    <div className="flex flex-col xl:flex-row md:justify-between gap-12">
                        <Card className={`${borderClassName} xl:w-1/2`}>
                            <CardHeader className="z-10 flex-row justify-between">
                                <div className={`${headerStyling} underline`}>
                                    {"Hello."}
                                </div>
                                <div>
                                    <Button  radius="full" variant="light" className={`border-1 border-gray-800 shadow-none bg-white text-medium md:text-lg`}>
                                        Read my story
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="text-xl md:text-2xl">
                                {"I’m Max, a self-taught Frontend Engineer with a passion for UI and UX design. My expertise lies in creating seamless web experiences using technologies like HTML, CSS, and JavaScript. From optimizing performance to crafting elegant interfaces, I’m dedicated to enhancing user interactions. "}
                            </CardBody>
                        </Card>
                        <Card className={`${borderClassName} xl:w-1/2`}>
                            <CardHeader className="z-10 flex-col !items-start">
                                <div className="flex flex-col">
                                    <p className={`text-lg text-gray-600`}>
                                        The tools behind stunning interfaces
                                    </p>
                                    <h2 className={headerStyling}>
                                        {"Tech Stack"}
                                    </h2>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0 h-[250px] xl:h-[180px]">
                                <Tabs size="lg" variant="underlined">
                                    <Tab title={<span className="text-medium md:text-lg">Frontend</span>}>
                                        <ScrollShadow hideScrollBar={true}>
                                            <Card className="shadow-none bg-white">
                                                <CardBody className="flex flex-row flex-wrap w-auto gap-2">
                                                    <Chip className="border-2 border-orange-600" variant="light" endContent={<IconBrandHtml5 stroke={1}/>}>
                                                        HTML
                                                    </Chip>
                                                    <Chip className="border-2 border-blue-500" variant="light" endContent={<IconBrandCss3 stroke={1}/>}>
                                                        CSS
                                                    </Chip>
                                                    <Chip className="border-2 border-yellow-400" variant="light" endContent={<IconBrandJavascript stroke={1}/>}>
                                                        JavaScript
                                                    </Chip>
                                                    <Chip className="border-2 border-blue-600" variant="light" endContent={<IconBrandTypescript stroke={1}/>}>
                                                        TypeScript
                                                    </Chip>
                                                    <Chip className="border-2 border-purple-500" variant="light" endContent={<IconBrandBootstrap stroke={1}/>}>
                                                        Bootstrap
                                                    </Chip>
                                                    <Chip className="border-2 border-cyan-700" variant="light" endContent={<IconBrandReact stroke={1}/>}>
                                                        React
                                                    </Chip>
                                                    <Chip className="border-2 border-black" variant="light" endContent={<IconBrandNextjs stroke={1}/>}>
                                                        Next.js
                                                    </Chip>
                                                    <Chip className="border-2 border-blue-400" variant="light" endContent={<IconBrandTailwind stroke={1}/>}>
                                                        Tailwind CSS
                                                    </Chip>
                                                    <Chip className="border-2 border-stone-600" variant="light" endContent={<IconBrandFramerMotion stroke={1}/>}>
                                                        Framer Motion
                                                    </Chip>
                                                    <Chip className="border-2 border-cyan-600" variant="light" endContent={<IconBrandReact stroke={1}/>}>
                                                        React Native
                                                    </Chip>
                                                    <Chip className="border-2 border-gray-950" variant="light" endContent={<IconCode stroke={1}/>}>
                                                        Expo
                                                    </Chip>
                                                </CardBody>
                                            </Card>
                                        </ScrollShadow>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Other</span>}>
                                        <Card className="shadow-none bg-white">
                                            <CardBody className="flex flex-row flex-wrap w-auto gap-2">
                                                <Chip className="border-2 border-green-700" variant="light" endContent={<IconBrandNodejs stroke={1}/>}>
                                                    Node.js
                                                </Chip>
                                                <Chip className="border-2 border-orange-700" variant="light" endContent={<IconBrandGit stroke={1}/>}>
                                                    Git
                                                </Chip>
                                                <Chip className="border-2 border-red-500" variant="light" endContent={<IconBrandNpm stroke={1}/>}>
                                                    npm
                                                </Chip>
                                            </CardBody>
                                        </Card>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <Card className={`${borderClassName} xl:w-1/2 md:max-h-[500px]`}>
                            <CardHeader className="z-10 flex-col !items-start">
                                <div className="text-lg text-gray-600">
                                    Press to expand
                                </div>
                                <div className={headerStyling}>
                                    {"Learn more about me"}
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Accordion isCompact showDivider={false}>
                                    <AccordionItem className={textStyling} aria-label="Accordion 1" title={<span className="text-xl md:text-2xl">What inspires you?</span>} indicator={<IconSparkles stroke={1}/>}>
                                        {"I find inspiration in solving problems, creating interfaces, and learning new things. Reading and music also influence my creativity. People like Steve Jobs and books such as \"Don’t Make Me Think\" have shaped my perspective. So has the open-source community."}
                                    </AccordionItem>
                                    <AccordionItem className={textStyling} aria-label="Accordion 2" title={<span className="text-xl md:text-2xl">How do you spend your free time?</span>} indicator={<IconClock stroke={1}/>}>
                                        {"Outside of my digital life, I enjoy cycling, reading, and listening to music. These activities help me relax and reflect. They’re my escape from screens and algorithms."}
                                    </AccordionItem>
                                    <AccordionItem className={textStyling} aria-label="Accordion 3" title={<span className="text-xl md:text-2xl">What are you currently learning?</span>} indicator={<IconNotes stroke={1}/>}>
                                        {"I'm currently learning the ins and outs of mobile app development using tools like React Native, Expo, and Firebase."}
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

