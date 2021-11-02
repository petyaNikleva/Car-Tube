import nav from './pages/nav/nav.js';
import page from './node_modules/page/page.mjs';
import homePage from './pages/home/homePage.js';
import registerPage from './pages/register/registerPage.js';
import renderingMiddleware from './rendering/renderingMiddleware.js';
import loginPage from './pages/login/loginPage.js';
import authService from './services/authService.js';
import allCarsPage from './pages/allCars/allCarsPage.js';
import createPage from './pages/create/createPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import myCarsPage from './pages/myCars/myCarsPage.js';
import searchPage from './pages/search/searchPage.js';

let appContainer = document.getElementById('site-content');
let navContainer = document.getElementById('nav');
renderingMiddleware.initialze(appContainer, navContainer);

page('/index.html', '/home');
page('/', '/home');

page('/home', renderingMiddleware.decorateContext, nav.getView, homePage.getView);
page('/login', renderingMiddleware.decorateContext, nav.getView, loginPage.getView);
page('/register', renderingMiddleware.decorateContext, nav.getView, registerPage.getView);
page('/all-cars', renderingMiddleware.decorateContext, nav.getView, allCarsPage.getView);
page('/details/:id', renderingMiddleware.decorateContext, nav.getView, detailsPage.getView);
page('/create', renderingMiddleware.decorateContext, nav.getView, createPage.getView);
page('/edit/:id', renderingMiddleware.decorateContext, nav.getView, editPage.getView);
page('/my-cars', renderingMiddleware.decorateContext, nav.getView, myCarsPage.getView);
page('/search', renderingMiddleware.decorateContext, nav.getView, searchPage.getView);



page.start();