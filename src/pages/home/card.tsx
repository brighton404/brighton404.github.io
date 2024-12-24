import Icons from "@/components/icons";
import Button, { ButtonColor, ButtonState } from "@/components/ui/button";
import { useCardContext } from './cardContext';

const ProfileCard = () => {
    const { expanded, toggleCard } = useCardContext();

    return (
        <div className="flex flex-row items-center justify-center pt-10 cardContext  w-full">
            <div className={`transition-all duration-300 ease-in-out ${expanded ? 'sm:scale-100 sm:px-[10vw] sm:pt-10 py-4 w-full h-fit items-left flex-col pb-[5vh] bg-background' : 'mt-8 p-4 sm:w-full sm:rounded-[15px] sm:mt-[6vh] sm:scale-[90%] w-max gap-4 h-min flex-row'}  rounded-lg  flex sm:flex-col `}>
                <div className={`transition-all duration-300 ease-in-out flex ${expanded ? 'w-full h-max gap-8 px-[30%] sm:px-0' : 'w-fulls h-full gap-2 '} `}>
                    <div className={`transition-all duration-300 ease-in-out flex flex-col p-2 sm:p-0 ${expanded ? 'hidden' : 'gap-2'}`}>
                        <><Icons variant="quotations"/></>
                        <span className="font-mono text-2xl font-bold">UI/UX designer</span>
                        <p className="sm:text-lg text-lg text-nowrap sm:text-wrap cursor-pointer" onClick={toggleCard} >Creating digital experiences collaboratively in order to <br className="sm:hidden"/> achieve genuine experiences for people of all abilities. </p>
                        <div className="flex gap-2">
                            <Button color={ButtonColor.Accent} state={ButtonState.Default}  isOutlined={false}>
                                <a href="https://www.linkedin.com/in/julius-brighton/" target="_blank">Connect with Me </a>                                
                            </Button>
                            <Button color={ButtonColor.isDisabled} state={ButtonState.Disabled} isOutlined={false}> See projects </Button>
                        </div>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out self-stretch flex flex-col items-start justify-center gap-8 mt-10 p-2 cardExpanded ${expanded ? '' : 'hidden'}`}>
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-xl cursor-pointer" >Professional biography</h2>
                            <div onClick={toggleCard} className="cursor-pointer"><Icons variant="close"/></div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch flex flex-col gap-2">
                            <h3 className="text-lg">Background</h3>
                            <p className="sm:text-sm font-mono">From my background UI & UX designers & digital artists are all considered as graphic designers, and the society at large doesn’t know about every design layer that is archivable<br /> <br />From the moment I stumbled upon the captivating world of UI designs, I found out that its not just about crafting visually appealing interfaces; it was about making technology seamlessly integrate into people's lives. What hooked me was the power to solve problems, and create experiences that leave an indelible mark.<br /><br />Each project becomes a new canvas, and every interaction is an opportunity to connect with users on a profound level. The incessant pursuit of perfection, the thrill of bringing concepts to life, and the ever-evolving landscape of design are the driving forces that fuel my passion.<br /><br />UI design isn't just a profession; it's a journey of discovery, innovation, and the joy of turning imagination into reality.
                            </p>
                            <div className="horizontalDark bg-100 rounded-lg flex flex-row py-2 px-8 gap-2 items-center text-white">
                            <Icons variant="file"/>
                            <span className="text-nowrap text-base">Resume -</span>
                            <a className="text-decoration:underline cursor-pointer" href="https://read.cv/brightonjulius"
                            target="_blank">Read.cv</a>
                            </div>
                        </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-2">
                            <div>
                                <h3 className="text-lg">Approach to UI design</h3>
                                <p className="sm:text-sm">I believe in crafting user-centric experiences that seamlessly blend aesthetics with functionality. My approach to UI design is guided by a combination of empathy, creativity, and attention to detail, ensuring that every design decision serves the needs and goals of the end user.</p>
                            </div>
                        <div className="flex flex-col pl-8 pt-4 gap-4 sm:pl-4">
                            <details>
                                <summary>User-centric Design</summary>
                                <p className="sm:text-sm">Putting the user at the center of the design process is paramount. I start by thoroughly understanding the target audience, their behaviours, and pain points through user research and analysis. This insight guides the creation of intuitive interfaces that resonate with users and fulfil their needs.</p>
                            </details>
                            <details>
                                <summary>Collaborative ideation</summary>
                                <p className="sm:text-sm">I value collaboration and believe that the best ideas emerge from diverse perspectives. I enjoy working closely with cross-functional teams, including developers, product managers, and stakeholders, to brainstorm creative solutions and iterate towards the optimal design.</p>
                            </details>
                            <details>
                            <summary>Iterative prototyping</summary>
                                    <p className="sm:text-sm">Prototyping lies at the heart of my design process. I believe in the power of rapid prototyping to explore and refine concepts iteratively. By creating interactive prototypes, I can gather valuable feedback early in the design process, enabling quick adjustments and improvements based on user insights.</p>
                            </details>
                            <details className="self-stretch flex flex-col items-start justify-start">
                                <summary>Attention to detail</summary>
                                <p className="sm:text-sm">I believe that great design lies in the details. From typography choices to micro interactions, every element is carefully considered to enhance usability and delight users. I strive for pixel-perfection in my designs, ensuring a visually cohesive and polished end product.</p>
                            </details>
                            <details>
                                <summary>Continuous learning and adaptation</summary>
                                <p className="sm:text-sm">The field of UI design is constantly evolving, with new tools, technologies, and trends emerging regularly. I am committed to staying updated with the latest developments in the industry and continuously honing my skills.<br />By embracing a growth mindset, I am always eager to learn from experiences and adapt to new challenges.</p>
                            </details>
                        </div>
                        </div>
                        <div>
                            <h3 className="text-lg">Digital art</h3>
                            <p className="sm:text-sm">In another spectrum of my life, digital art has always challenged my way of thinking in an artistical way and my knowledge surrounding machines in human-computer interaction.<br/> I started out in virtual photography by capturing video game screenshots and making concept art by color grading or editing out to create something new.</p>
                        </div>
                        <div className="self-stretch">
                            <h3 className="text-lg">Rugby</h3>
                            <p className="sm:text-sm">For me, is not just a game. Thanks to my father who was a seasoned rugby player, I was naturally drawn to the sport that shaped my early memories, growing up to the deafening sound of cleats on the field. I was inspired by watching one world cup season when i was still a kid.<br /><br /> What keeps me interested is the relationship among teammates, the symphony of training, and the strategic plays between opponents. The rugby field is my proving ground, where i go out and relieve myself from my daily activities. Career-wise, the sport isn't merely a pursuit; it's a dedication to surpass limits, and a relentless pursuit of excellence. In every scrum and sprint, I find a testament to an enduring legacy in my lifetime.</p>
                            </div>
                            <div className={`horizontalDark h-min rounded-lg bg-100 flex flex-row items-center justify-start px-4 py-2 text-white ${expanded ? 'w-full self-stretch' : 'w-max'} `}>
                                <div className="flex w-fit pr-4"><Icons  variant="globe"/></div>  
                                <span className="text-nowrap text-sm">Social -</span>
                                <div className="w-fit flex flex-row items-center justify-start px-2 gap-4">
                                    <a className="relative text-sm text-decoration:none cursor-pointer text-nowrap" href="https://www.linkedin.com/in/julius-brighton/" target="_blank">LinkedIn</a>
                                    <a className="relative text-sm text-decoration:none cursor-pointer text-nowrap" href="https://vero.co/jomviking" target="_blank">Vero</a>
                                    <a className="relative text-sm text-decoration:none cursor-pointer text-nowrap" href="https://www.behance.net/juliusbrighton" target="_blank">Behance</a>
                                </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;