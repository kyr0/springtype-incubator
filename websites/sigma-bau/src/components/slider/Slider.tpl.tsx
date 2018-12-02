import {Slider} from "./Slider";
import "./Slider.scss"

export default (view: Slider) =>

    <div>
        <div className="slider">
            <ul className="slides">
                {view.props.images.map((img) =>
                    <li>
                        <img src={img.imgSrc}/>
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </div>

