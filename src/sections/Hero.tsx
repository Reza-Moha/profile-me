import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { ConstantStars } from "@/UI/ConstantStars";
import RelativeStars from "@/UI/RelativeStars";
export const HeroSection = () => {
  return (
    <main className="overflow-hidden">
      <div
        className="h-screen py-32 md:py-48 lg:py-60 relative z-0"
        style={{ direction: "ltr" }}
      >
        <div className="absolute inset-0 [mask-image:linear-gradiant(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
          <RelativeStars />
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src}` }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          <ConstantStars />
        </div>
        <div className="container z-9">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-x-1">
              <Image
                src={memojiImage}
                className="size-[100px]"
                alt="person peeking from behind laptop"
              />
            </div>
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center justify-center gap-4 rounded-lg">
              <div>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div className="text-sm font-medium">
                در دسترس برای پروژه جدید
              </div>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide">
              ایجاد تجربیات کاربری استثنایی
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              ما در تبدیل طرح ها به برنامه کاربردی وب با کارایی بالا تخصص داریم.
              اجازه دهید در مورد پروژه بعدی شما بحث کنیم
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="flex items-center justify-center gap-2 border border-white/15 px-6 w-[150px] h-12 rounded-xl hover:bg-white/20 cursor-pointer transition-all ease-out duration-300 hover:border-white/25">
              <ArrowDown className="size-4" />
              <div className="font-semibol flex-1 ">نمونه کار</div>
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:scale-105 transition-all ease-out duration-300">
              <span>👋</span>
              <span className="font-semibold">درخواست پروژه</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};