import logoSigma from "./assets/images/logo/sigma.svg";
import logoSigmaMinimal from "./assets/images/logo/sigma-minimal.svg";
import logoSigmaSmall from "./assets/images/logo/sigma-small.svg";
//logo firmen
import logoReiter from "./assets/images/logo/reiter.png";
import logoKranzmaier from "./assets/images/logo/kranzmaier.jpg";
//Team pictures
import teamReiter from "./assets/images/team/reiter.jpg";
import teamKranzmaier from "./assets/images/team/hans.jpg";
//other
import homeParallax from "./assets/images/page/home/parallax.webp";
import homeSigma from "./assets/images/page/home/sigma.svg";
import homePlanning from "./assets/images/page/home/planung.webp";
import homeLivinghouse from "./assets/images/page/home/wohnhaus.webp";
import homeLivinghouse1 from "./assets/images/page/home/mehrfamilienhauses.webp";
import homeLivinghouse2 from "./assets/images/page/home/mehrfamilienhauses1.webp";
import homeLivinghouse3 from "./assets/images/page/home/mehrfamilienhauses2.webp";
//logo companies
import footerCompanyLechner from "./assets/images/footer/company/lechner.jpg"
import footerCompanyMaiSmartHome from "./assets/images/footer/company/mai_smart_home.png"
import footerCompanyNeulingerbau from "./assets/images/footer/company/neulinger_bau.png"
import footerCompanyZimmereiRachl from "./assets/images/footer/company/zimmerei_rachl.png"

export const RESOURCES = {
    logo: {
        normal: logoSigma,
        small: logoSigmaSmall,
        minimal: logoSigmaMinimal,
        reiter: logoReiter,
        kranzmaier: logoKranzmaier
    },
    team: {
        kranzmaier: teamKranzmaier,
        reiter: teamReiter
    },
    page: {
        home: {
            parallax: homeParallax,
            sigma: homeSigma,
            services: {
                planning: homePlanning,
                livinghouse: homeLivinghouse,
                livinghouse1: homeLivinghouse1,
                livinghouse2: homeLivinghouse2,
                livinghouse3: homeLivinghouse3
            }
        }
    },
    footer: {
        company: [
            {
                src: footerCompanyLechner,
                name: "Lechner Heizung & Sanitär",
                url: "https://www.google.com/maps/place/Fa.+Lechner+Heizung+%26+Sanit%C3%A4r,+Isen/@48.2053547,12.0577073,17z/data=!3m1!4b1!4m5!3m4!1s0x479e02560e3dbafb:0x2dd4d745083c3b9c!8m2!3d48.2053511!4d12.059896"
            },
            {
                src: footerCompanyMaiSmartHome,
                name: "MaiSmartHome GmbH",
                url: "https://mai-smart-home.de/"},
            {
                src: footerCompanyNeulingerbau,
                name: "Neulinger Bau",
                url: "https://www.bau-neulinger.de/"},
            {
                src: footerCompanyZimmereiRachl,
                name: "Zimmerei & Holzbau Rachl GbR",
                url: "http://zimmerei-rachl.de/"}
        ]
    }

};
