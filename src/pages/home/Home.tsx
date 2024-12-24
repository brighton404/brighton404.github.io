import ProfileCard from "./card";
import React from "react";

const Homepage: React.FC = () => {
    return (
    <div className="w-screen">
        <div className="polka-dots bg-[#F5F5F5] dark:bg-background flex w-full flex-col min-h-full h-screen items-center overflow-y-scroll">
            <ProfileCard />
        </div>
    </ div>
);
}

export default Homepage;