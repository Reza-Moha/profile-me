"use client";
import { SectionHeader } from "@/UI/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import { CardHeader } from "@/UI/CardHeader";
import ToolboxItems from "@/UI/ToolboxItems";
import { hobbies, toolboxItems } from "@/constants/Data";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import Smileemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";
export const AboutSection = ({ id }: { id: string }) => {
  const constraintRef = useRef(null);
  return (
    <div id={id} className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="نگاهی به دنیای من"
          eyebrow="درباره ما"
          description="بیشتر درباره‌ی ما، کاری که انجام می‌دهیم، و آنچه ما را الهام می‌بخشد بدانید"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="کتاب های ما"
                description="با کتاب‌هایی که دیدگاه‌های ما را شکل داده‌اند آشنا شوید"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="تکنولوژی هایی که استفاده می کنیم"
                description="با فناوری‌ها و ابزارهایی که برای خلق تجربه‌های دیجیتال بی‌نظیر
به کار می‌بریم، آشنا شوید"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 md:mt-0"
                itemsWrapperClassName="animate-move-right [animation-duration:45s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="translate-x-1/2 animate-move-left [animation-duration:60s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                title="بعد از کد و مارکتینگ"
                description="
                با علاقه‌مندی‌ها و سرگرمی‌های ما در دنیای فراتر از برنامه نویسی
                و دیجیتال مارکتینگ آشنا شوید"
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6  bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320] p-0 relative col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="location i on the map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={Smileemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
