import authService from "../../services/authService.js";
import carService from "../../services/carService.js";
import { detailsTemplate } from "./detailsTemplate.js";

async function deleteHandler(context, id, e) {
    let confirmed = confirm('Are you sure that you want to delete this?');
    if(confirmed){
        let deleteResult = await carService.deleteItem(id);
        context.page.redirect('/all-cars');
    }
}

async function getView(context) {
    let id = context.params.id;
    let boundDeleteHandler = deleteHandler.bind(null, context, id);
    let car = await carService.get(id);
    car.imageUrl = car.imageUrl.startsWith('.') ? car.imageUrl.substring(1) : car.imageUrl;
    let isOwner = authService.getUserId() === car._ownerId;

    let templateResult = detailsTemplate(car, boundDeleteHandler, isOwner);
    context.renderView(templateResult);
}

export default {
    getView
}