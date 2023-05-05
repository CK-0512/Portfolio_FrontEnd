import { NavLink } from "react-router-dom";
import { MenuBar2 } from "../../MenuBar";

export default function Skills() {
    return (
        <>
            <div className="h-full flex">
                <MenuBar2/>
                <NavLink
                    to="/Skills/FrontEnd"
                    className="
                h-full 
                relative
                cursor-pointer
                ">
                    <img
                        src="img/weapon.png"
                        alt=""
                        className="
                        h-full 
                        flex 
                        flex-1 
                        opacity-50
                        hover:opacity-100 
                            hover:scale-110
                            transition 
                            duration-700
                            "
                    />
                    <div
                    className="absolute"
                    style={{
                        top:"40%",
                        left:"35%",
                        width:"33%"
                    }}
                    >
                        <img
                        src="img/sword_logo.png"
                        alt=""
                        className="absolute pointer-events-none" />
                    </div>
                    <div
                                className="
                        absolute
                        text-4xl 
                        font-medium  
                        text-white
                        bg-purple-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-purple-700
                        pointer-events-none
                        "
                                style={{ 
                                    top: "32%", 
                                    left: "37.7%",
                                    width: "26%"
                                 }}
                            >
                                FrontEnd
                            </div>
                </NavLink>
                <NavLink
                    to="/Skills/BackEnd"
                    className="
                h-full 
                relative
                cursor-pointer
                ">
                    <img
                        src="img/potion.png"
                        alt=""
                        className="
                        h-full 
                        flex 
                        flex-1 
                        opacity-50
                        hover:opacity-100 
                            hover:scale-110
                            transition 
                            duration-700
                            "
                    />
                    <div
                    className="absolute"
                    style={{
                        top:"40%",
                        left:"35%",
                        width:"33%"
                    }}
                    >
                        <img
                        src="img/potion_logo.png"
                        alt=""
                        className="absolute pointer-events-none" />
                    </div>
                    <div
                                className="
                        absolute
                        text-4xl 
                        font-medium  
                        text-white
                        bg-purple-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-purple-700
                        pointer-events-none
                        "
                                style={{ 
                                    top: "32%", 
                                    left: "38.7%", 
                                    width: "25%"
                                }}
                            >
                                BackEnd
                            </div>
                </NavLink>
                <NavLink
                    to="/Skills/Etc"
                    className="
                h-full 
                relative
                cursor-pointer
                ">
                    <img
                        src="img/pet.png"
                        alt=""
                        className="
                        h-full 
                        flex 
                        flex-1 
                        opacity-50
                        hover:opacity-100 
                            hover:scale-110
                            transition 
                            duration-700
                            "
                    />
                    <div
                    className="absolute"
                    style={{
                        top:"40%",
                        left:"35%",
                        width:"33%"
                    }}
                    >
                        <img
                        src="img/pet_logo.png"
                        alt=""
                        className="absolute pointer-events-none" />
                    </div>
                    <div
                                className="
                        absolute
                        text-4xl 
                        font-medium  
                        text-white
                        bg-purple-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-purple-700
                        pointer-events-none
                        "
                                style={{ 
                                    top: "32%", 
                                    left: "46%",
                                    width: "12%"
                                }}
                            >
                                Etc
                            </div>
                </NavLink>
            </div>
        </>
    );
}