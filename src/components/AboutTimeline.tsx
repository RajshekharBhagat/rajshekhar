import React from "react";
import { Timeline } from "./ui/timeline";
import { GlowingEffect } from "./ui/glowing-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const AboutTimeline = () => {
  const data = [
    {
      time: "2022 - 2024",
      main: "Bachelor of Science (Information Technology)",
      company: "Thakur College of Science and Commerce",
      location: "Kandivali East, Mumbai",
      content: (
        <div className="relative p-4 flex flex-col h-[500px] border-8 border-zinc-900 items-center rounded-3xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Completed a comprehensive undergraduate program focusing on core and
            advanced areas of IT, including Programming, Databases, Networking,
            and Web Development.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Gained hands-on experience through academic projects involving Full
            Stack Development, Cloud Computing, and Artificial Intelligence.
            Developed real-world applications using technologies like Next.js,
            MongoDB, and Node.js.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Participated in technical seminars, hackathons, and team projects
            that improved my problem-solving, collaboration, and communication
            skills.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Achieved high academic performance and demonstrated consistent
            growth in understanding software engineering principles and IT best
            practices.
          </p>
        </div>
      ),
    },
    {
      time: "2024 - present",
      main: "Master of Science (Information Technology)",
      company: "Thakur College of Science and Commerce",
      location: "Kandivali East, Mumbai",
      content: (

        <div className="relative p-4 flex flex-col h-[500px] border-8 border-zinc-900 items-center rounded-3xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            />
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Pursuing a postgraduate degree with a focus on advanced concepts in
            computer science, software architecture, data science, and cloud
            technologies.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Working on real-time projects involving Deep Learning, Computer
            Vision, and Big Data, with an aim to develop scalable and
            intelligent systems.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Exploring research and development in areas like Ocean Data Analysis
            using AI, Neural Networks, and Data Trend Forecasting with Deep
            Learning.
          </p>
          <p className="mb-3 text-xs font-normal md:text-sm text-zinc-200">
            Enhancing technical and analytical skills through a combination of
            coursework, academic projects, and collaborative learning
            experiences.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default AboutTimeline;
