import { useTheme } from "../contexts/ThemeContext";

const getThemeBg = (theme: string, mode: string) => {
  if (theme === "field" && mode === "light") return "bg-[#CFFFFF]";
  if (theme === "aura" && mode === "light") return "bg-[#FFF5FF]";
  if (theme === "crimson" && mode === "light") return "bg-[#F2E6FF]";
  if (theme === "field" && mode === "dark") return "bg-[#005886]";
  if (theme === "crimson" && mode === "dark") return "bg-[#581E64]";
  if (mode === "light") return lightColors[theme];
  return colorMap[theme];
};

const getCardBg = (theme: string, mode: string) => {
  if (theme === "field" && mode === "light") return "bg-[#2FFFFF] text-black";
  if (theme === "aura" && mode === "light") return "bg-[#FFD7F3] text-black";
  if (theme === "crimson" && mode === "light") return "bg-[#FFA9E7] text-black";
  if (theme === "field" && mode === "dark") return "bg-[#007B9E] text-white";
  if (theme === "aura" && mode === "dark") return "bg-[#C92A4B] text-white";
  return getThemeBg(theme, mode);
};

const getLeftBlockBg = (theme: string, mode: string) => {
  if (theme === "field" && mode === "light") return "bg-[#CFFFFF]";
  if (theme === "aura" && mode === "light") return "bg-[#FFF5FF]";
  if (theme === "crimson" && mode === "light") return "bg-[#F2E6FF]";
  if (theme === "field" && mode === "dark") return "bg-[#005886]";
  if (theme === "crimson" && mode === "dark") return "bg-[#2A2152]";
  if (theme === "aura" && mode === "dark") return "bg-[#A00153]";
  return "bg-defaultColor";
};

const getTopBlockBg = (theme: string, mode: string) => {
  if (theme === "field" && mode === "light") return "bg-[#00FFB6]";
  if (theme === "field" && mode === "dark") return "bg-[#009EA0]";
  if (theme === "aura" && mode === "light") return "bg-[#FFC891]";
  if (theme === "aura" && mode === "dark") return "bg-[#E8543C]";
  if (theme === "crimson" && mode === "light") return "bg-[#FF5A91]";
  if (theme === "crimson" && mode === "dark") return "bg-[#8B0067]";
  return colorMap[theme];
};

const getBottomBlockBg = (theme: string, mode: string) => {
  if (theme === "field" && mode === "light") return "bg-[#33FF00]";
  if (theme === "field" && mode === "dark") return "bg-[#00C08D]";
  if (theme === "aura" && mode === "dark") return "bg-[#FC8127]";
  return colorMap[theme];
};

const getToggleModeBtnClass = (theme: string, mode: string) => {
  if (mode === "light") {
    if (theme === "field") return "bg-[#2FFFFF] text-black";
    if (theme === "aura") return "bg-[#FFD7F3] text-black";
    if (theme === "crimson") return "bg-[#FFA9E7] text-black";
    return "bg-cyan-300 text-black";
  } else {
    if (theme === "field") return "bg-[#005886] text-white";
    if (theme === "aura") return "bg-[#A00153] text-white";
    if (theme === "crimson") return "bg-[#2A2152] text-white";
    return "bg-cyan-600 text-white";
  }
};

const colorMap: Record<string, string> = {
  aura: "bg-[#FFD354]",
  crimson: "bg-[#FF2D55] text-black",
  field: "bg-green-400",
};

const lightColors: Record<string, string> = {
  aura: "bg-yellow-100",
  crimson: "bg-red-100",
  field: "bg-green-100",
};

const ThemeSwitcher = () => {
  const { theme, mode, toggleMode, toggleTheme } = useTheme();

  console.log("Current Theme:---->>>", JSON.stringify(theme));
  console.log("Current Mode:", mode);

  const themeBg = getThemeBg(theme, mode);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 bg-gray-100 dark:bg-gray-900 p-4 ${themeBg}`}>
      <div className={`bg-white dark:bg-gray-800 rounded-[16px] p-2 shadow-xl w-[300px] h-[125px] flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-500 ${themeBg}`}>
        <div className={`w-[138px] h-[109px] p-[4px] rounded-[8px] shadow-md ${getCardBg(theme, mode)}`}>
          <div className="grid grid-cols-2 grid-rows-2 gap-[4px]">
            <div className={`rounded-[4px] transition-all duration-500 ${getLeftBlockBg(theme, mode)} w-[63px] h-[101px] row-span-2`} />
            <div className="w-[63px] h-[101px] flex flex-col gap-[4px]">
              <div className={`w-[63px] h-[48.5px] p-[10px] rounded-[4px] box-border ${getTopBlockBg(theme, mode)}`} />
              <div className={`w-[63px] h-[48.5px] p-[10px] rounded-[4px] ${getBottomBlockBg(theme, mode)}`} />
            </div>
          </div>
        </div>

        <div className="w-[138px] h-[109px] flex flex-col items-center space-y-2 self-end">
          <h1 className="w-[138px] h-[31px] rounded-[8px] px-4 py-2 text-[12px] leading-[100%] tracking-[0] font-normal text-black dark:text-white text-center">
            Theme Switcher
          </h1>
          <button onClick={toggleMode} className={`w-[138px] h-[31px] px-4 py-2 rounded-[8px] font-normal text-[12px] transition-all duration-300 ${getToggleModeBtnClass(theme, mode)}`}>
            {mode === "light" ? "Light Mode" : "Dark Mode"}
          </button>
          <button onClick={toggleTheme} className={`w-[138px] h-[31px] px-4 py-2 rounded-[8px] font-normal text-[12px] transition-all duration-300 ${colorMap[theme]} text-white`}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
