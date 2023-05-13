import { useRecoilState } from "recoil";
import { mainOpacityAtomFamily, opacityAtom} from "./atoms";

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

export function opacityClear() {
    const [opacity, setOpacity] = useRecoilState(opacityAtom);

    const clear = () => setOpacity(40);

    return {
        opacity,
        clear
    };
}
