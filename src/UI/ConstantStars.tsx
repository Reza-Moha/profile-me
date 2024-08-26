import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const ConstantStars = () => {
  return (
    <>
      <HeroOrbit size={800} rotations={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotations={25}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotations={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={430} rotations={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotations={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotations={178}>
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={710} rotations={144}>
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotations={20}>
        <div className="size-3 text-emerald-300/20 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={520} rotations={-41}>
        <div className="size-2 text-emerald-300/20 rounded-full" />
      </HeroOrbit>{" "}
      <HeroOrbit size={650} rotations={-5}>
        <div className="size-2 text-emerald-300/20 rounded-full" />
      </HeroOrbit>
    </>
  );
};
