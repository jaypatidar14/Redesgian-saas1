import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Vikram Sinha",
    role: "Founder / CEO",
    description: "Tech innovator solving real-world problems.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75",
  },
  {
    id: 2,
    name: "Radhika Iyer",
    role: "Chief Strategy Officer",
    description: "Drives growth with strategic insights.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf1.jpg&w=96&q=75",
  },
  {
    id: 3,
    name: "Ethan Mitchell",
    role: "Lead Product Designer",
    description: "Designs seamless and innovative user experiences.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam1.jpg&w=96&q=75",
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Head of Digital Marketing",
    description: "Boosts online presence and recognition.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf2.jpg&w=96&q=75",
  },
  {
    id: 5,
    name: "Chris Anderson",
    role: "Content Strategist",
    description: "Creates engaging content strategies.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    id: 6,
    name: "Sophia Miller",
    role: "Social Media Manager",
    description: "Builds brands through social media.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf1.jpg&w=96&q=75",
  },
  {
    id: 7,
    name: "Amit Verma",
    role: "Senior UI/UX Designer",
    description: "Crafts intuitive and appealing interfaces.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf2.jpg&w=96&q=75",
  },
  {
    id: 8,
    name: "Nisha Rao",
    role: "Brand Manager",
    description: "Maintains strong brand identity.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf2.jpg&w=96&q=75",
  },
  {
    id: 9,
    name: "Benjamin Harris",
    role: "SEO Specialist",
    description: "Optimizes content for search rankings.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam3.jpg&w=96&q=75",
  },
  {
    id: 10,
    name: "Olivia Brown",
    role: "Content Writer",
    description: "Develops engaging and informative content.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf4.jpg&w=96&q=75",
  },
  {
    id: 11,
    name: "Rajesh Kannan",
    role: "Graphic Designer",
    description: "Creates visually striking designs.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf3.jpg&w=96&q=75",
  },
  {
    id: 12,
    name: "Aditi Shah",
    role: "Public Relations Manager",
    description: "Manages media relations and communication.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin3.jpg&w=96&q=75",
  },
  {
    id: 13,
    name: "James Cooper",
    role: "Business Analyst",
    description: "Uses data to drive decisions.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf5.jpg&w=96&q=75",
  },
  {
    id: 14,
    name: "Priya Desai",
    role: "HR Manager",
    description: "Optimizes talent management and environment.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf3.jpg&w=96&q=75",
  },
  {
    id: 15,
    name: "Robert Taylor",
    role: "Technical Support Lead",
    description: "Ensures smooth technical operations.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam5.jpg&w=96&q=75",
  },
  {
    id: 16,
    name: "Sneha Menon",
    role: "Project Manager",
    description: "Manages projects for quality outcomes.",
    image:
      "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf4.jpg&w=96&q=75",
  },
];
interface TeamExpertsProps {
  id: number;
}

const TeamExperts: React.FC<TeamExpertsProps> = ({ id }) => {
  const member = teamMembers.find((member) => member.id === id);
  const [hovered, setHovered] = useState(false);

  if (!member) return null;

  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={member.image}
        alt={member.name}
        className="w-10 h-10 md:w-36 md:h-44 object-cover rounded-lg"
      />

      <div
        className={`absolute top-8 p-2 border rounded-lg md:top-0 md:w-36 md:h-44 backdrop-blur-lg bg-opacity-60 bg-blue-500 text-white text-center transform transition-all duration-500 ease-in-out ${
          hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h3 className="font-semibold py-4">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
        <p className="text-xs mt-1">{member.description}</p>
      </div>
    </div>
  );
};
const TeamGrid: React.FC = () => {
  return (
    <section className="text-center px-4 py-20">
      <div className="text-2xl font-sans font-bold text-violet-700 mb-6">
        Our Experts Team
      </div>
      <p className="text-gray-500 font-sans dark:text-gray-400 max-w-3xl mx-auto mb-8 md:mb-20 text-2xl">
        At Everything Talent, our innovative team develops AI-driven assessments
        and an advanced ATS to modernize hiring. We focus on reducing bias,
        making recruitment efficient, and providing accessible tools for
        companies of all sizes to attract top talent.
      </p>

      <div className="grid grid-cols-6 grid-flow-row gap-4 mx-auto  max-w-5xl ">
        <TeamExperts id={1} />
        <TeamExperts id={2} />
        <TeamExperts id={3} />
        <TeamExperts id={4} />
        <TeamExperts id={5} />
        <TeamExperts id={6} />
        <TeamExperts id={7} />
        <TeamExperts id={8} />
        <TeamExperts id={9} />
      </div>
    </section>
  );
};

export default TeamGrid;
