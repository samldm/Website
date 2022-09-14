import { FaHome, FaRobot, FaWrench } from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarIcon icon={<FaHome size="28" />} text="🏠 Home" active={true} />
            <SidebarIcon icon={<FaWrench size="28" />} text="🔧 Techno's" />
            <SidebarSplitter />
            <SidebarIcon icon={<FaRobot size="28" />} text="🤖 Discord.js Bot Template" />
        </div>
    );
};

const SidebarSplitter = () => {
    return (
        <span class="h-8 w-[3px] rounded mr-2 ml-2 my-auto bg-gray-800"></span>
    );
}

const SidebarIcon = ({ icon, text, active }) => {
    return (
        <div className={`sidebar-icon group ${active && 'bg-green-600 text-white rounded-xl'}`}>
            {icon}
            <span className="sidebar-tooltip group-hover:block">
                {text}
            </span>
        </div>
    );
}

export default Sidebar;