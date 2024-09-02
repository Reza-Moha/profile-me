import { FC } from "react";

interface HeaderProps {
  handleScroll: (id: string) => void;
}

export const Header: FC<HeaderProps> = ({ handleScroll }) => {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={() => handleScroll("home")}
          className="nav-item cursor-pointer"
        >
          صفحه اصلی
        </a>
        <a
          onClick={() => handleScroll("projects")}
          className="nav-item cursor-pointer"
        >
          پروژه ها
        </a>
        <a
          onClick={() => handleScroll("about-us")}
          className="nav-item cursor-pointer"
        >
          درباره ما
        </a>
        <a
          onClick={() => handleScroll("contact-us")}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 cursor-pointer"
        >
          ارتباط با ما
        </a>
      </nav>
    </header>
  );
};
