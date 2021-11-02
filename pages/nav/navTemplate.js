import { html } from "./../../node_modules/lit-html/lit-html.js";

export let navTemplate = (navInfo) => html`
<a class="active" href="/home">Home</a>
                <a href="all-cars">All Listings</a>
                <a href="/search">By Year</a>
                ${navInfo.isLoggedIn
                ? html`
                <div id="profile">
                    <a>Welcome ${navInfo.username}</a>
                    <a href="/my-cars">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="javascript:void(0)" @click=${navInfo.logoutHandler}>Logout</a>
                </div>`
                : html`
                  <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}

`;


