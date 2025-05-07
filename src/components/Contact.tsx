import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { BsGithub, BsLinkedin, BsMailbox2Flag } from "react-icons/bs";

const logos = ["/img/Zentry.png", "/img/RoitGames.png", "/img/Vercel.png"];

const Contact = () => {
  return (
    <div id="WhoMadeThis" className="min-h-96  pb-43 w-screen bg-black px-10">
      <AnimatedTitle title="Special Thanks To:" containerClass="" />
      <div className="grid md:grid-cols-3 grid-cols-1 my-5 grayscale">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            height={1000}
            width={1000}
            priority
            alt="Thanks To"
            className="md:p-5 p-2 md:max-h-50 max-h-30 w-fit brightness-0 invert place-self-center-safe"
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-white text-center">
        I&apos;d like to express my sincere appreciation to Riot Games, Zentry,
        and Vercel for the tools and resources that enabled me to build the
        Valorant Agent Hub as a personal portfolio project. While I did not
        communicate directly with any of their teams, I made use of publicly
        available assets, design inspiration, and services provided online.
        Zentry&apos;s sleek and modern interface principles greatly influenced
        the UI/UX of the project, helping me deliver a polished and engaging
        experience. Riot Games&apos; official Valorant assets, accessed solely
        for educational and non-commercial use, added authenticity and depth,
        allowing me to honor the game&apos;s distinctive visual style. I&apos;m
        also especially thankful to Vercel for offering a powerful, free hosting
        solution that made deployment seamless and professional. Everything in
        this project—from structure and styling to interactive functionality—has
        been hand-coded by me from the ground up. This project is a creative
        tribute made possible entirely through these openly accessible
        resources, and I&apos;m grateful for the opportunity to feature it as
        part of my development portfolio.
      </p>
      <p className="text-md font-bold text-white my-10 text-center">Made By:</p>

      <AnimatedTitle
        title="Abdul Rafay Khalid"
        containerClass="!text-5xl md:!text-8xl"
      />
      <p className="my-10 text-xs text-white text-center">
        I&apos;m always eager to tackle new challenges and bring fresh
        perspectives to every project—so please, don&apos;t hesitate to
        collaborate with me! Whether you&apos;re brainstorming a cutting-edge
        web feature, designing an intuitive user interface, or building your
        next big idea from the ground up, I&apos;m here to roll up my sleeves
        and contribute my experience in front-end development, UX/UI principles,
        and creative problem-solving. Let&apos;s connect, share ideas, and turn
        your vision into reality—together we can achieve more than we ever could
        alone!
      </p>
      <div className="flex md:flex-row flex-col place-items-center gap-5 justify-evenly">
        <Button
          theLink="https://www.linkedin.com/in/abdulrafaykhalid"
          title="Linkedin"
          containerClass="flex-center gap-1"
          leftIcon={<BsLinkedin />}
          id="Linkedin"
        />
        <Button
          theLink="https://github.com/ARafaykhalid"
          title="Github"
          containerClass="flex-center gap-1"
          leftIcon={<BsGithub />}
          id="Github"
        />
        <Button
          theLink="https://mail.google.com/mail/?view=cm&fs=1&to=abdulrafaykhalidjameel@gmail.com"
          title="Mail me"
          containerClass="flex-center gap-1"
          leftIcon={<BsMailbox2Flag />}
          id="Email"
        />
      </div>
    </div>
  );
};

export default Contact;
