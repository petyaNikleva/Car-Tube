import authService from "../../services/authService.js"
import { navTemplate } from "./navTemplate.js"
import page from './../../node_modules/page/page.mjs'

async function logoutHandler(e){
    let userId = authService.getUserId();
    await authService.logout(userId); 
    page.redirect('/home');
}

function getView(context, next){
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        //currentPage: context.pathname,
        username: authService.getUsername(),
        logoutHandler
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}



export default {
    getView
}