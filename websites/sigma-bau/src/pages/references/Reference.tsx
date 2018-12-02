import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "../../components/slider/Slider"
import {SliderProps} from "../../components/slider/Slider";
import slArch1 from "../../assets/images/slider/architecture/01.png"
import slArch2 from "../../assets/images/slider/architecture/02.png"
import slArch3 from "../../assets/images/slider/architecture/03.jpg"
interface ReferenceProps {
}

@WebComponent({
    tag: 'sb-reference'
})
export class Reference extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: ReferenceProps
    ) {
        super();
    }

    init = () => {
    };

    mountChildren = () => {
        const elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    };

    render = () => {
        const imgArchitecture: SliderProps = {
            images: [
                {imgSrc: slArch1},
                {imgSrc: slArch2},
                {imgSrc: slArch3},
            ]
        };
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1>Architektur</h1>
                        <sb-slider props={imgArchitecture}/>
                    </div>
                </div>
            </div>)
    }
}