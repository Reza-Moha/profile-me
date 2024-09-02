import ProjectCard from "@/components/ProjectCard";
import { SectionHeader } from "@/UI/SectionHeader";
import Card from "@/components/Card";
import { portfolioProjects } from "@/constants/Data";

export const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="نتیجه تجربه واقعی"
          eyebrow="پروژه های تکمیل شده"
          description=" تماشا کنید که کانسپت های دیجیتالی جدید رو با رابط کاربری عالی"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <ProjectCard {...project} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
