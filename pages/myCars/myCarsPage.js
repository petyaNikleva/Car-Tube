import authService from "../../services/authService.js";
import carService from "../../services/carService.js";
import { myCarsTemplate } from "./myCarsTemplate.js";


async function getView(context) {
    let userId = authService.getUserId();
    let myCars = await carService.getMyCars(userId);
    let templateResult = myCarsTemplate(myCars);
    context.renderView(templateResult);
}

export default {
    getView
}