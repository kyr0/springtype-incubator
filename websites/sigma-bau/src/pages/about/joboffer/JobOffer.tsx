import {WebComponent, WebComponentLifecycle} from "../../../../../../src/package/html";
import "./JobOffer.scss"

export interface JobOfferProps {
    jobName: string;
    description: string;
    requirements: string[];
    offer: string[];
    mail: string;
    footer?: string[];
}

@WebComponent({
    tag: 'sb-job-offer'
})
export class JobOffer extends HTMLElement implements WebComponentLifecycle {
    public props!: JobOfferProps;

    constructor() {
        super();
    }

    init = () => {
    };


    render() {


        return (


            <div class="card">
                <div class="card-content">
                    <div class="title">{this.props.jobName}</div>
                    <div class="description">
                        {this.props.description}
                    </div>
                    <div class="header">Voraussetzungen</div>
                    <ul>
                        {this.props.requirements.map((req) => <li>{req}</li>)}
                    </ul>
                    <div class="header">Wir bieten Ihnen</div>
                    <ul>
                        {this.props.offer.map((off) => <li>{off}</li>)}
                    </ul>
<hr/>
                    {this.props.footer ? this.props.footer.map((foo) => <div class="spacer bottom"> {foo}</div>) : ''}
                    <a href={'mailto:' + this.props.mail}>{this.props.mail}</a>
                </div>
            </div>

        )
    }
}