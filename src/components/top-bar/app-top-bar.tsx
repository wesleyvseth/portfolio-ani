import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

const AppTopBar = () => {
  return (
    <div className="bg-[#f87e58] flex items-center justify-between px-4">
      <span className="wvs font-semibold text-[#3d3d3d]">wvs.dev</span>
      <div className="flex gap-4 text-white">
        <FaLinkedin />
        <FaTwitter />
        <MdOutgoingMail />
      </div>
    </div>
  );
};
export default AppTopBar;
