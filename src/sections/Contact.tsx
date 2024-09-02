import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pb-16 pt-14 lg:pb-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-right relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src}` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold font-kalameh md:text-3xl">
                بیایید با هم چیزی فوق‌العاده بسازیم
              </h2>
              <p className="text-sm mt-2 md:text-base">
                آیا آماده‌اید تا پروژه بعدی‌تان را به واقعیت تبدیل کنید؟ بیایید
                با هم ارتباط برقرار کنیم و درباره نحوه کمک من به شما برای رسیدن
                به اهداف‌تان صحبت کنیم.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max border border-gray-900">
                <ArrowUpRight className="size-4" />
                <span className="font-semibold">ارتباط با ما</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
