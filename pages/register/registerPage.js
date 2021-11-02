import authService from "../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

async function submitHandler(context, e){
    e.preventDefault();
    let formData = new FormData(e.target);

    let user = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    let registerResult = await authService.register(user);
    context.page.redirect('/all-cars');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = registerTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}