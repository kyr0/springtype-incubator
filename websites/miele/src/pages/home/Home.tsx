import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./../../components/navigation/Navigation"
interface HomeProps {
    credentials?: LoginResponse
}

interface LoginResponse {
    appToken: string;
    appTokenValidity: number;
}

@WebComponent({
    tag: 'miele-home'
})
export class Home extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps,
    ) {
        super();
        this.login();
    }

    login = () => {
        const target = 'V2/Login';
        fetch(`http://rest-dev.mcs2.miele.com/${target}`, {
        //fetch(`https://cors-anywhere.herokuapp.com/rest-dev.mcs2.miele.com/${target}`, {
            method: "POST",
            body: JSON.stringify({
                "email": "abc@abc.com",
                "password": "12345678"
            }),
            headers: {
                "Content-Type": "application/json",
                'Accept-Language': 'de-DE'
            }
            //[[],['Content-sType', 'application/json']]
        })
            .then(response => {
                if (!response.ok) {
                    alert(response.statusText)
                } else {
                    return response.json();

                }
            })
            .then((data) => this.props.credentials = data as LoginResponse);

    };


    render() {



        return (
            <div>
                <m-navigation/>
                <div class="container">
                    {this.props.credentials ? this.props.credentials.appToken : ''}
                    <br/>
                    {this.props.credentials ? this.props.credentials.appTokenValidity : ''}
                </div>
            </div>)
    }

    init() {
    }
}