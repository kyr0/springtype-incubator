import {BannerImg} from "./BannerImg";
import "./BannerImg.scss"

export default (view: BannerImg) =>
    <img class="banner click"
         onClick={() => window.open(view.props.url, '_blank')}
         src={view.props.src}
         alt={view.props.name}
    />