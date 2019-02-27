import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";

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
       /* const imgArchitecture: SliderProps = {
            images: [
                {imgSrc: slArch1},
                {imgSrc: slArch2},
                {imgSrc: slArch3},
            ]
        };*/
        return (
            <div class="container">
                REVERENCE
            </div>)
    }
               /* <div class="row">
                    <div class="col s12">
                        <h1>Architektur</h1>
                        <sb-slider props={imgArchitecture}/>
                    </div>
                </div>*/
}