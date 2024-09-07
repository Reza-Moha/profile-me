import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

export const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Nextjs",
    iconType: NextjsIcon,
  },
  {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "Mysql",
    iconType: MysqlIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Instagram",
    iconType: InstagramIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },

  {
    title: "Twitter",
    iconType: TwitterIcon,
  },
  {
    title: "Youtube",
    iconType: YoutubeIcon,
  },
];

export const hobbies = [
  {
    title: "Painting",
    emoji: "‍🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "‍📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "‍👾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Skier",
    emoji: "‍⛷",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "‍🗻",
    left: "60%",
    top: "70%",
  },
  {
    title: "music",
    emoji: "‍🎻",
    left: "60%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "‍📚",
    left: "10%",
    top: "60%",
  },
];

export const portfolioProjects = [
  {
    company: "شرکت Acme",
    year: "۲۰۲۲",
    title: "صفحه فرود برای سرویس‌های ابری تاریک",
    results: [
      { title: "بهبود تجربه کاربری به میزان ۴۰٪" },
      { title: "بهبود سرعت سایت به میزان ۵۰٪" },
      { title: "افزایش ترافیک موبایلی به میزان ۳۵٪" },
    ],
    link: "/",
    image: darkSaasLandingPage,
  },
  {
    company: "شرکت Innovative",
    year: "۲۰۲۱",
    title: "صفحه فرود برای سرویس‌های ابری روشن",
    results: [
      { title: "افزایش فروش به میزان ۲۰٪" },
      { title: "گسترش دسترسی به مشتریان به میزان ۳۵٪" },
      { title: "افزایش آگاهی از برند به میزان ۱۵٪" },
    ],
    link: "/",
    image: lightSaasLandingPage,
  },
  {
    company: "شرکت Quantum Dynamics",
    year: "۲۰۲۳",
    title: "صفحه فرود برای استارتاپ هوش مصنوعی",
    results: [
      { title: "بهبود تجربه کاربری به میزان ۴۰٪" },
      { title: "بهبود سرعت سایت به میزان ۵۰٪" },
      { title: "افزایش ترافیک موبایلی به میزان ۳۵٪" },
    ],
    link: "/",
    image: aiStartupLandingPage,
  },
];

export const testimonials = [
  {
    name: "تیم آی اپتیک ترنر",
    position: "مدیر بازاریابی @ TechStartups",
    text: "تیم آی اپتیک نقش کلیدی در تبدیل وب‌سایت ما به یک ابزار قدرتمند بازاریابی داشت. توجه او به جزئیات و توانایی‌اش در درک برند ما بی‌نظیر است. ما از نتایج بسیار راضی هستیم!",
    avatar: memojiAvatar1,
  },
  {
    name: "اولیویا گرین",
    position: "رئیس طراحی @ GreenLeaf",
    text: "کار کردن با تیم آی اپتیک لذت‌بخش بود. تخصص او در توسعه فرانت‌اند طرح‌های ما را به شکلی زنده درآورد که هرگز تصور نمی‌کردیم. وب‌سایت ما فراتر از انتظارات ما بوده است.",
    avatar: memojiAvatar2,
  },
  {
    name: "دنیل وایت",
    position: "مدیر عامل @ InnovateCo",
    text: "توانایی تیم آی اپتیک در ایجاد تجربیات کاربری بدون درز بی‌همتاست. از زمان راه‌اندازی طراحی جدید، وب‌سایت ما شاهد افزایش قابل توجهی در نرخ تبدیل بوده است. ما نمی‌توانستیم خوشحال‌تر باشیم.",
    avatar: memojiAvatar3,
  },
  {
    name: "امیلی کارتر",
    position: "مدیر محصول @ GlobalTech",
    text: "تیم آی اپتیک یک جادوگر واقعی در فرانت‌اند است. او محصول پیچیده ما را به یک رابط کاربری شهودی و جذاب تبدیل کرد. ما از بازخورد مثبت مشتریان خود بسیار خوشحالیم.",
    avatar: memojiAvatar4,
  },
  {
    name: "مایکل براون",
    position: "مدیر فناوری اطلاعات @ MegaCorp",
    text: "کار تیم آی اپتیک روی وب‌سایت ما چیزی کمتر از فوق‌العاده نبوده است. او توسعه‌دهنده‌ای با استعداد است که همچنین ارتباطات بسیار خوبی دارد. ما او را به شدت توصیه می‌کنیم.",
    avatar: memojiAvatar5,
  },
];

export const words = [
  "پرفورمانس",
  "قابل دسترس",
  "امنیت",
  "تعامل بیشتر",
  "مقیاس پذیر",
  "ریسپانسیو",
  "کاربر پسند",
  "نگهداری آسان",
  "جستجوی بهینه شده",
  "قابل استفاده",
  "قابل اعتماد",
];

export const FooterLinks = [
  {
    title: "Instagram",
    href: "",
  },
  {
    title: "Telegram",
    href: "",
  },
  {
    title: "Whatsapp",
    href: "",
  },
  {
    title: "Gmail",
    href: "",
  },
];
