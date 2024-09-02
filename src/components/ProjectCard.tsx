import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
interface ProjectCardProps {
  title: string;
  company: string;
  year: string | number;
  results: { title: string }[];
  link: string;
  image: StaticImageData | string;
}

export default function ProjectCard({
  title,
  company,
  year,
  results,
  link,
  image,
}: ProjectCardProps) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest text-sm text-transparent bg-clip-text">
            <span>{company}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>
          <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {results.map((result, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm text-white/50 md:text-base"
              >
                <CheckCircleIcon
                  style={{ width: "20px", height: "20px" }}
                  className="size-5 md:size-6"
                />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <Link href={link} target="_blank">
            <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl  inline-flex items-center justify-center gap-2 mt-8 px-6">
              <span>نمایش زنده پروژه</span>
              <ArrowUpRight className="size-4" />
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </>
  );
}
