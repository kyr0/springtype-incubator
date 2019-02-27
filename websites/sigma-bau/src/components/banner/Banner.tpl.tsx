import "./img/BannerImg";

import {Banner} from "./Banner";
import "./Banner.scss"

export default (view: Banner) => {
   return view.props.banner.map((banner) =>
        <sb-banner-img props={{
            ...banner,
            width: 0
        }}
        />
    )
}


