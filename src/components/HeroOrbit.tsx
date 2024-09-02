import StarIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotations,
}: PropsWithChildren<{ size: number; rotations: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start "
        style={{
          transform: `rotate(${rotations}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex"
          style={{ transform: `rotate(${rotations * -1}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
