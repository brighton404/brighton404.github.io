import { Link } from "react-router-dom";
import Icons from "./icons";
import { useCardContext } from '@/pages/home/cardContext';

const Header = () => {
    const { expanded, toggleCard } = useCardContext();

    return (
        <div className="justify-between bg-black dark:bg-black flex w-full py-2 px-4 items-center h-[5vh] bg-background sm:fixed z-[2]">
            <><Icons variant="logo" /></>
            <a href="/blog">Blog</a>
            <div className="text-white flex flex-row gap-6">
                <div className={` ${expanded ? '' : ''} `}>
                    <div className={` ${expanded ? 'hidden' : ''} `}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={`cursor-pointer ${expanded ? '' : 'hidden'} `}>
                        <span onClick={toggleCard}>Close Card</span>
                    </div>
                </div>
                <a href="https://julius.brightons.site/blog">Blog</a>
        </div>
        </div>
    );
};

export default Header;