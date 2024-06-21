import "./App.css";

import AppHeader from "./components/header/app-header";
import AppTopBar from "./components/top-bar/app-top-bar";
import { useAtom } from "jotai";
import { delayedBackgroundAtom, instantBackgroundAtom } from "./store";
import AppHeaderButtons from "./components/header-buttons/app-header-buttons";
import AppMainContent from "./components/main-content/app-main-content";

function App() {
  const [delayedBackground] = useAtom(delayedBackgroundAtom);
  const [instantBackground] = useAtom(instantBackgroundAtom);

  const getColorClass = () => {
    return delayedBackground === "informal" ? "bg-[#f87e58]" : "bg-slate-200";
  };

  return (
    <div className="w-full flex justify-center">
      <div className={`App w-[550px] z-10 flex flex-col ${getColorClass()} `}>
        <div className={`grow  w-full relative`}>
          <div className="fixed z-[1]">
            <AppTopBar />
            <AppHeader />
            <AppHeaderButtons />
          </div>
          <AppMainContent />
          <div className={`transition-container background-transition--${instantBackground} absolute top-0 left-0 w-full h-full`}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
