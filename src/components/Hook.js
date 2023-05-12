import { useRecoilState } from "recoil";
import { mainOpacityAtomFamily} from "./atoms";

export function useChangeOpacityMain(mainNo) {
    const [opacities, setOpacities] = useRecoilState(mainOpacityAtomFamily(mainNo));

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
