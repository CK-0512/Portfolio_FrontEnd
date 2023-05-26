import { motion } from "framer-motion";
import { Backspace, Backspace2, GoHome } from "./PageMove";
import { NavLink } from "react-router-dom";

export function MenuBar1() {
    return (
        <>
            <motion.div
                className="menubar_box w-full h-1/4 fixed z-10 flex"
            //initial={{ y: "-90%" }}
            //whileHover={{ y: "-15%" }}
            >

                <img src="img/menubar.png" alt="" className="w-full h-full" />
                <div
                    className="absolute flex"
                    style={{ width: "18%", height: "60%", left: "5%", top: "30%" }}>
                    <Backspace />
                    <GoHome />
                </div>
                <ul
                    className="flex justify-between absolute"
                    style={{ width: "60%", height: "60%", left: "26%", top: "30%" }}>
                    <li>
                        <NavLink
                            to="/Profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Skills"
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Project"
                        >
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ToContact"
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
            <motion.div
                className="menuBar w-full h-20 sm:h-30 lg:h-1/6 xl:h-1/5 2xl:h-1/4 fixed z-10 flex"
                initial={{ y: "-90%" }}
                whileHover={{ y: "-15%" }}
            >

                <img src="img/menubar.png" alt="" className="w-full h-full" />
                <div
                    className="absolute flex"
                    style={{ width: "18%", height: "60%", left: "5%", top: "30%" }}>
                    <Backspace2 />
                    <GoHome />
                </div>
                <ul
                    className="flex justify-between absolute"
                    style={{ width: "60%", height: "60%", left: "26%", top: "30%" }}>
                    <li>
                        <NavLink
                            to="/Profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Skills"
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Project"
                        >
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ToContact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};