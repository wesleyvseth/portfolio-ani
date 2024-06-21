import AppAnimatedAvatar from "../animated-avatar/app-animated-avatar";

interface AppHeaderParams {
  setBackground: (background: string) => void;
  background: string;
}

const AppHeader: React.FC<AppHeaderParams> = ({ setBackground, background }) => {
  return (
    // 1024px width screen centered
    <div className="flex justify-center w-full border-b-[3px] border-white z-20 bg-slate-200">
      <div className="flex relative w-full min-h-[150px] h-full">
        <div className="flex justify-end items-center w-full h-full m-r-[16px]"></div>
        <div className="absolute bottom-[-40px] left-4">
          <AppAnimatedAvatar
            background={background}
            setBackground={setBackground}
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
