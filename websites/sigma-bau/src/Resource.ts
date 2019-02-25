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
    }

};
