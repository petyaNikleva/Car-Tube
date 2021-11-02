import carService from "../../services/carService.js";
import { searchTemplate } from "./searchTemplate.js";

let ctx = undefined;

async function searchHandler(e) {
    let searchedYear = document.getElementById('search-input').value;
    let carSearchResult = await carService.search(searchedYear);
    let templateResult = searchTemplate(searchHandler, carSearchResult);
    ctx.renderView(templateResult);
}

async function getView(context) {
    ctx = context;
    let templateResult = searchTemplate(searchHandler);
    context.renderView(templateResult);
}

export default {
    getView
}


