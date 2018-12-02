import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {parallaxImgSrc} from "./HomeRessource";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-home'
})
export class Home extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    init = () => {
    };

    mountChildren = () => {
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    };


    render() {

        return (
            <div>
                home
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={parallaxImgSrc}/>
                    </div>
                </div>
            </div>)
    }
}