import { FaGithub, FaGlobe, FaNodeJs, FaAngular, FaReact } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSolid, SiSolidity, SiTypescript } from "react-icons/si";
import rankpactLogo from "../../assets/rp-icon.svg";
import rankpactSite from "../../assets/rankpact-site.png";
import ctseerLogo from "../../assets/ctseer-logo.png";
import ctseerSite from "../../assets/ctseer-site.png";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  technologyIcons: ReactNode[];
  logo: string;
  mockup: string;
  github: string;
  website: string;
}

const AppInformalContent = () => {
  const projects: Project[] = [
    {
      name: "Rankpact",
      description:
        "Rankpact is a web application to create and optimize SEO content. Users can create new content with the use of AI and track the results of this new content, to optimize their visibility.",
      technologyIcons: [
        <FaNodeJs
          size="20px"
          color="#3d3d3d"
        />,
        <FaAngular
          size="20px"
          color="#3d3d3d"
        />,
        <SiTypescript
          size="20px"
          color="#3d3d3d"
        />,
        <IoLogoFirebase
          size="20px"
          color="#3d3d3d"
        />,
      ],
      logo: rankpactLogo,
      mockup: rankpactSite,
      github: "",
      website: "",
    },
    {
      name: "CTSeer",
      description:
        "CTSeer is a fully functional Ethereum based betting platform. Users can create bets by putting their ETH tokens in a contract and other users can join the bet. The winner takes all.",
      technologyIcons: [
        <FaNodeJs
          size="20px"
          color="#3d3d3d"
        />,
        <FaReact
          size="20px"
          color="#3d3d3d"
        />,
        <SiTypescript
          size="20px"
          color="#3d3d3d"
        />,
        <IoLogoFirebase
          size="20px"
          color="#3d3d3d"
        />,
        <SiSolidity
          size="20px"
          color="#3d3d3d"
        ></SiSolidity>,
      ],
      logo: ctseerLogo,
      mockup: ctseerSite,
      github: "",
      website: "",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <div className="p-4 border-white border-b">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
              <img
                className="w-[35px] h-[35px]"
                src={project.logo}
                alt={project.name}
              ></img>
            </div>
            <span className="font-medium">{project.name}</span>
            <div className="flex justify-end gap-3">
              <FaGithub
                size="20px"
                color="white"
              />
              <FaGlobe
                size="20px"
                color="white"
              />
            </div>
          </div>
          <div className="ml-[68px]">
            <span>{project.description}</span>

            <div className="flex gap-8 mt-4">{project.technologyIcons}</div>
          </div>
          <div className="bg-[#e8e8e8] rounded-2xl">
            <img
              className="rounded-xl mt-4"
              src={project.mockup}
              alt={`${project.name} website`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AppInformalContent;
