import carService from "../../services/carService.js";
import { allCarsTemplate } from "./allCarsTemplate.js"

async function getView(context) {
    let allCars = await carService.getAll();
    let templateResult = allCarsTemplate(allCars);
    context.renderView(templateResult);
}

export default {
    getView
}