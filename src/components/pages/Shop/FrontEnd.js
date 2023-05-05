import { MenuBar1 } from "../../MenuBar";

export default function FrontEnd() {
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
                        src="img/sword.jpg"
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
                        opacity-40
                        hover:opacity-100
                            transition 
                            duration-1000
                    "
                        style={{
                            top: "7.7%",
                            height: "63vh",
                            width: "100%"
                        }}
                    >
                        <img
                            src="img/frontEnd.png"
                            alt=""
                            className="
                            absolute
                            "
                            style={{
                                height: "63vh",
                                width: "99.2%"
                            }}
                        />
                        <div
                        className="
                        absolute 
                        text-4xl 
                        font-medium 
                        text-white
                        bg-yellow-800
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-yellow-900
                        pointer-events-none
                        "
                        style={{
                            top: "50%",
                            left: "45%"
                        }}
                        >
                            FrontEnd
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};