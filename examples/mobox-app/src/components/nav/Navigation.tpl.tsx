import {Navigation} from "./Navigation";

export default (component: Navigation) => [
    <nav> <div data-target="slide-out" class="sidenav-trigger"><i id="menu-toggle" class="material-icons">menu</i></div> </nav>,

    <ul id="slide-out" class="sidenav">
        <li>
            <div class="user-view">
                <div class="background">
                    <img src="https://materializecss.com/images/office.jpg"/>
                </div>
                <a onClick={(evt: Event) => {evt.preventDefault()}} href="#user"><img class="circle" src="https://materializecss.com/images/yuna.jpg"/></a>
                <a onClick={(evt: Event) => {evt.preventDefault()}} href="#name"><span class="white-text name">John Doe</span></a>
                <a onClick={(evt: Event) => {evt.preventDefault()}} href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
            </div>
        </li>
        <li><a onClick={(evt: Event) => {evt.preventDefault()}} href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a onClick={(evt: Event) => {evt.preventDefault()}} href="#!">Second Link</a></li>
        <li>
            <div class="divider"/>
        </li>
        <li><a onClick={(evt: Event) => {evt.preventDefault()}} class="subheader">Subheader</a></li>
        <li><a onClick={(evt: Event) => {evt.preventDefault()}} class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
]
