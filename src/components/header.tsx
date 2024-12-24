import Icons from "./icons";
import Button, { ButtonColor, ButtonState } from "./ui/button";

const Header = () => {
    return (
        <header className="justify-between bg-[#EBEBEB] flex w-full py-2 px-4 items-center h-[5vh] bg-background fixed z-[999]">
            <><Icons variant="logo" /></>
            <div className="text-black flex flex-row gap-6">
                <div>
                    <div className="flex flex-row">
                    <Button color={ButtonColor.Primary} state={ButtonState.Default} icon={<Icons variant="book" />} isOutlined={false} navigateTo="../blog/">Blog</Button>
                    <Button 
                    color={ButtonColor.isDisabled}
                    state={ButtonState.Disabled}
                    icon={<Icons variant="folder" />}
                    isOutlined={false}
                    navigateTo=""
                    > Projects </Button>
                    </div>
                </div>
        </div>
        </header>
    );
};

export default Header;