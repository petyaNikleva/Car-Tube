
import carService from "../../services/carService.js";
import { createTemplate } from "./createtemplate.js";


let form = undefined;
async function submitHandler(context, e){
    e.preventDefault();
    let formData = new FormData(e.target);

    form.invalidFields = {};

    let brand = formData.get('brand');
    if(brand.length < 1) {
        form.invalidFields.brand = true;
    }

    let model = formData.get('model');
    if(model.length < 1) {
        form.invalidFields.model = true;
    }

    let description = formData.get('description');
    if(description.length < 1) {
        form.invalidFields.description = true;
    }

    let year = Number(formData.get('year'));
    if(year < 1 || (!year)) {
        form.invalidFields.year = true;
    }

    let imageUrl = formData.get('imageUrl');
    if(imageUrl.trim() === '') {
        form.invalidFields.imageUrl = true;
    }

    let price = Number(formData.get('price'));
    if(price <= 0 || (!price)) {
        form.invalidFields.price = true;
    }

    if(Object.keys(form.invalidFields).length > 0){
        let templateResult = createTemplate(form);
        return context.renderView(templateResult);
    }


    let newCar = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price
          }

    let createResult = await carService.create(newCar);
    context.page.redirect('/all-cars');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    form = {
        submitHandler: boundSubmitHandler,
        invalidFields: {
            brand: true,
            model: true,
            description: true,
            year: true,
            imageUrl: true,
            price: true
        }
    }
    let templateResult = createTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}


