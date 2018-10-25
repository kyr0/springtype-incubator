// allow for all custom elements
declare namespace JSX {
    interface IntrinsicElements {
        RouterOutlet: any;
        [tagName: string]: any
    }
}

declare namespace React {
    export class DOM {}
}