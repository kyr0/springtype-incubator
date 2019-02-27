import {WebComponent, WebComponentLifecycle} from "../../../../../../src/package/html";
import "./Member.scss"

export interface MemberProps {
    img_src: string;
    name: string;
    position: string;
    cv: string[];
    email: string
}

@WebComponent({
    tag: 'sb-member'
})
export class Member extends HTMLElement implements WebComponentLifecycle {
    public props!: MemberProps;

    constructor() {
        super();
    }

    init = () => {
    };

    render = () =>
        [
            <img class="logo" src={this.props.img_src} alt=""/>,
            <div class="h name">{this.props.name}</div>,
            <div class="h position">{this.props.position}</div>,
            <ul class="cv space-top-small">
                {
                    this.props.cv.map((el) => <li>{el}</li>)
                }
            </ul>
        ]
}