import Image, { StaticImageData } from "next/image";
import Card from "@/components/Card";

export default function TestimonialCard({
  name,
  avatar,
  position,
  text,
}: {
  name: string;
  avatar: StaticImageData;
  position: string;
  text: string;
}) {
  return (
    <>
      <Card
        key={name}
        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
      >
        <div className="flex gap-4 items-center">
          <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image src={avatar} alt={name} className="max-h-full" />
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-white/40">{position}</div>
          </div>
        </div>
        <p className="mt-4 md:mt-6 text-sm md:text-base">{text}</p>
      </Card>
    </>
  );
}
