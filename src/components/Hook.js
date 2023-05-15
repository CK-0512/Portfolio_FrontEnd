import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { opacityAtomFamily} from "./atoms";
import { useState } from "react";

export function useChangeOpacity(mainNo) {
    const [opacities, setOpacities] = useRecoilState(opacityAtomFamily(mainNo));

    const clickOpacitied = () => setOpacities(100);
    const hoverOpacitied = () => setOpacities(99);
    const clear = () => setOpacities(40);

    return {
        opacities,
        clickOpacitied,
        hoverOpacitied,
        clear
    };
}

export function UseSwitchChangeOpacity() {
    const [changeOpacities, setChangeOpacities] = useState(0);

    const switchOn = () => setChangeOpacities(1);

    

    return {
        changeOpacities,
        switchOn
    };
}
