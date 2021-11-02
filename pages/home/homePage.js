import { homeTemplate } from "./homeTemplate.js";

async function getView(context) {
    let templateResult = homeTemplate();
    context.renderView(templateResult);
}

export default {
    getView
}