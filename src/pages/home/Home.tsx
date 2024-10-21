import Header from "@/components/header";
import ProfileCard from "./card";
import React from "react";

const Homepage: React.FC = () => {
    return (
    <div className="w-screen">
    <Header />
        <div className="polka-dots bg-1000 dark:bg-background flex w-full flex-col h-[95vh] overflow-scroll items-center font-mono">
        <ProfileCard />
        </div>
    </ div>
);
}

export default Homepage;