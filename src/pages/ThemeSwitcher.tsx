import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, mode, toggleMode, toggleTheme } = useTheme();

  const colorMap: Record<string, string> = {
    aura: "bg-[#FFD354]", //background: #FFD354;

    crimson: "bg-[#FF2D55] text-black",
    field: "bg-green-400",
  };

  const lightColors: Record<string, string> = {
    aura: "bg-yellow-100",
    crimson: "bg-red-100",
    field: "bg-green-100",
  };
  const themeBg =
    theme === "field" && mode === "light"
      ? "bg-[#CFFFFF]"
      : theme === "aura" && mode === "light"
      ? "bg-[#FFF5FF]"
      : theme === "crimson" && mode === "light"
      ? "bg-[#F2E6FF]"
      : theme === "field" && mode === "dark"
      ? "bg-[#005886]"
      : theme === "crimson" && mode === "dark"
      ? "bg-[#581E64]"
      : mode === "light"
      ? lightColors[theme]
      : colorMap[theme];

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 bg-gray-100 dark:bg-gray-900 p-4 ${themeBg}`}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-[16px] p-2 shadow-xl w-[300px] h-[125px] flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-500 ${themeBg}`}
      >
        <div
          className={`w-[138px] h-[109px] p-[4px] rounded-[8px] shadow-md ${
            theme === "field" && mode === "light"
              ? "bg-[#2FFFFF] text-black"
              : theme === "aura" && mode === "light"
              ? "bg-[#FFD7F3] text-black"
              : theme === "crimson" && mode === "light"
              ? "bg-[#FFA9E7] text-black"
              : theme === "field" && mode === "dark"
              ? "bg-[#007B9E] text-white"
              : theme === "aura" && mode === "dark"
              ? "bg-[#C92A4B] text-white"
              : themeBg
          }`}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-[4px]">
           <div
  className={`rounded-[4px] transition-all duration-500 ${
    theme === "field" && mode === "light"
      ? "bg-[#CFFFFF]"
      : theme === "aura" && mode === "light"
      ? "bg-[#FFF5FF]"
      : theme === "crimson" && mode === "light"
      ? "bg-[#F2E6FF]"
      : theme === "field" && mode === "dark"
      ? "bg-[#005886]"
      : theme === "crimson" && mode === "dark"
      ? "bg-[#2A2152]"
      : theme === "aura" && mode === "dark"
      ? "bg-[#A00153]"
      : "bg-defaultColor"
  } w-[63px] h-[101px] row-span-2`}
/>


            <div className="w-[63px] h-[101px] flex flex-col gap-[4px]">
            <div
  className={`w-[63px] h-[48.5px] p-[10px] rounded-[4px] box-border ${
    theme === "field" && mode === "light"
      ? "bg-[#00FFB6]"
      : theme === "field" && mode === "dark"
      ? "bg-[#009EA0]"
      : theme === "aura" && mode === "light"
      ? "bg-[#FFC891]"
      : theme === "aura" && mode === "dark"  // Added condition for dark mode and aura theme
      ? "bg-[#E8543C]"
      : theme === "crimson" && mode === "light"
      ? "bg-[#FF5A91]"
      : theme === "crimson" && mode === "dark"
      ? "bg-[#8B0067]"
      : colorMap[theme]
  }`}
/>


<div
  className={`w-[63px] h-[48.5px] p-[10px] rounded-[4px] ${
    theme === "field" && mode === "light"
      ? "bg-[#33FF00]"
      : theme === "field" && mode === "dark"
      ? "bg-[#00C08D]"
      : theme === "aura" && mode === "dark" // Added condition for dark mode and aura theme
      ? "bg-[#FC8127]"
      : colorMap[theme]
  }`}
/>

            </div>
          </div>
        </div>

        <div className="w-[138px] h-[109px] flex flex-col items-center space-y-2 self-end">
          <h1 className="w-[138px] h-[31px] rounded-[8px] px-4 py-2 text-[12px] leading-[100%] tracking-[0] font-normal text-black dark:text-white text-center">
            Theme Switcher
          </h1>

          <button
  onClick={toggleMode}
  className={`w-[138px] h-[31px] px-4 py-2 rounded-[8px] font-normal text-[12px] transition-all duration-300 ${
    mode === "light"
      ? theme === "field"
        ? "bg-[#2FFFFF] text-black"
        : theme === "aura"
        ? "bg-[#FFD7F3] text-black"
        : theme === "crimson"
        ? "bg-[#FFA9E7] text-black"
        : "bg-cyan-300 text-black"
      : theme === "field"
      ? "bg-[#005886] text-white"
      : theme === "aura"
      ? "bg-[#A00153] text-white"  // Updated this case for dark mode and aura theme
      : theme === "crimson"
      ? "bg-[#2A2152] text-white"
      : "bg-cyan-600 text-white"
  }`}
>
  {mode === "light" ? "Light Mode" : "Dark Mode"}
</button>


          <button
            onClick={toggleTheme}
            className={`w-[138px] h-[31px] px-4 py-2 rounded-[8px] font-normal text-[12px] transition-all duration-300 ${colorMap[theme]} text-white`}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
