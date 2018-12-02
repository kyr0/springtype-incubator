import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import template from "./Slider.tpl";

export interface Image {
    imgSrc: string
    text?: {
        title: string;
        content?: string;
    }
}

export interface SliderProps {
    images: Image[]
}

@WebComponent({
    tag: 'sb-slider',
    template
})
export class Slider extends HTMLElement implements WebComponentLifecycle {


    constructor(
        public props: SliderProps,
    ) {
        super();
    }

    init = () => {
    };


}