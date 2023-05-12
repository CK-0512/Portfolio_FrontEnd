import { motion } from "framer-motion";
import { Backspace, Backspace2, GoHome } from "./PageMove";
import { NavLink } from "react-router-dom";

export function MenuBar1() {
    return (
        <>
            <motion.div className="w-full h-1/4 fixed z-10 flex"
                 initial={{ y: "-90%" }}
                 whileHover={{ y: "-15%" }}
                 >
                
                <img src="img/menubar.png" alt="" className="w-full h-full"/>
                <div className="flex">
                    <Backspace />
                    <GoHome />
                </div>
                <ul 
                className="flex justify-between absolute"
                style={{width: "60%", height: "60%", left: "26%", top: "28%"}}>
                    <li className="flex items-center">
                        <NavLink
                            to="/Profile"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Profile
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/Skills"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Skills
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/Project"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Project
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/ToContact"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            "
                            >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export function MenuBar2() {
    return (
        <>
            <motion.div className="w-full h-1/4 fixed z-10 flex"
                 initial={{ y: "-90%" }}
                 whileHover={{ y: "-15%" }}
                 >
                
                <img src="img/menubar.png" alt="" className="w-full h-full"/>
                <div className="flex">
                    <Backspace2 />
                    <GoHome />
                </div>
                <ul 
                className="flex justify-between absolute"
                style={{width: "60%", height: "60%", left: "26%", top: "28%"}}>
                    <li className="flex items-center">
                        <NavLink
                            to="/Profile"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Profile
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/Skills"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Skills
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/Project"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            ">
                            Project
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to="/ToContact"
                            className="
                            cursor-pointer 
                            text-6xl 
                            text-gray-100 
                            hover:text-gray-700
                            transition
                            duration-500
                            "
                            >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="flex flex-1"/>
            </motion.div>
        </>
    );
};