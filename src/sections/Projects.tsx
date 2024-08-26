import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";

const portfolioProjects = [
  {
    id: 1,
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    id: 2,
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex-justify-center ">
          <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            نتایج دنیای واقعی
          </p>
        </div>

        <h2>پروژه های پیش رو</h2>
        <p>ببینید چگونه مفاهیم را به تجربه دیجیتالی جذاب تبدیل کردم</p>
        <div>
          {portfolioProjects.map((project) => (
            <div key={project.id}>
              <div>
                <span> {project.company} </span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((pResult, index) => (
                  <li key={index}>{pResult.title}</li>
                ))}
              </ul>
              <Link href={project.link} target="_blank">
                <button>نمایش زنده پروژه</button>
              </Link>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
