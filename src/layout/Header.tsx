import Logo from "../components/Logo";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
  return (
    <>
      <header
      className="flex items-center justify-between
      px-[clamp(1rem,2.5vw,3rem)] py-[clamp(1.5rem,1.5vw,2rem)] shadow-[0_0_5px_2px_#00000020]
      dark:bg-[#202c37] transition-all duration-300 ease-in-out">
        <Logo />
        <ThemeSwitcher />
      </header>
    </>
  );
};

export default Header;
