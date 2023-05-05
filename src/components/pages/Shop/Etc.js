import { MenuBar1 } from "../../MenuBar";

export default function Etc() {
    return (
        <>
            <div className="h-full w-full flex">
                <MenuBar1/>
                <div
                    className="
                    flex
                    flex-1
                h-full 
                relative
                ">
                    <img
                        src="img/pet.jpg"
                        alt=""
                        className="
                        flex
                        flex-1
                        h-full 
                        opacity-50
                            "
                    />
                     <div
                        className="
                        absolute 
                        cursor-pointer
                        opacity-30
                        hover:opacity-100
                            transition 
                            duration-1000
                    "
                        style={{
                            top: "37.79%",
                            left: "19%",
                            width: "75.7%",
                            height: "38%"
                        }}
                    >
                        <img
                            src="img/ect.png"
                            alt=""
                            className="
                            absolute
                            "
                            style={{
                                width: "95.5%",
                                height: "99.8%"
                            }}
                        />
                        <div
                        className="
                        absolute 
                        text-4xl 
                        font-medium 
                        text-white
                        bg-gray-400
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-gray-600
                        pointer-events-none
                        "
                        style={{
                            top: "12.4%",
                            left: "37.8%"
                        }}
                        >
                            Etc
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};