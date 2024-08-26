export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          صفحه اصلی
        </a>
        <a href="#" className="nav-item">
          پروژه ها
        </a>
        <a href="#" className="nav-item">
          درباره ما
        </a>
        <a
          href="#"
          className="nav-item bg-white text-gray-900 hover:bg-white/70hover:text-gray-900"
        >
          ارتباط با ما
        </a>
      </nav>
    </header>
  );
};
