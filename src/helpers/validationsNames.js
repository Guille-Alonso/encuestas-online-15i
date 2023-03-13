export const validationNames = (values) => {
    let errors = {};

    if(!values.name){   
        errors.name = "El nombre es obligatorio";
    }else if(values.name.length>25){
        errors.name="El nombre no puede tener mas de 25 caracteres";
    }else if(values.name.length<4){
        errors.name="El nombre debe tener como mínimo 4 caracteres";
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(values.name)){
        errors.name="No se admiten números o símbolos especiales"
    }

    return errors;
};