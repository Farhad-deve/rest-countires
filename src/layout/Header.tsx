import Logo from "../components/Logo";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
  return (
    <>
      <header
      className="flex items-center justify-between sticky top-0 left-0 w-full z-10
      px-[clamp(1rem,5vw,5rem)] py-[clamp(1.5rem,1.5vw,2rem)] bg-white dark:bg-[#2b3945] shadow-[0_2px_5px_2px_#00000020]
      transition-all duration-300 ease-in-out">
        <Logo />
        <ThemeSwitcher />
      </header>
    </>
  );
};

export default Header;
