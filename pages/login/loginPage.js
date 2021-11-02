import authService from "../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";

async function submitHandler(context, e){
    e.preventDefault();
    let formData = new FormData(e.target);

    let user = {
        password: formData.get('password'),
        username: formData.get('username')
    }

    let loginResult = await authService.login(user);
    context.page.redirect('/all-cars');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = loginTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}