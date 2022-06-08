export const validate = (allPokesCheck, input) => {
    let errors = {};    
    errors.button = false;


    

    let pokeExistent = allPokesCheck.filter(poke => poke.name.toLowerCase() === input.name.toLowerCase())
    if (pokeExistent.length) {
        errors.name = 'Este Poke ya existe'

    }


    if (!input.name) {
        errors.name = "Nombre es obligatorio";

    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
        errors.name = "Nombre no valido";

    } else if (input.name.length > 15) {
        errors.name = "Maximo 15 letras";

    }


    if (!input.attack) {
        errors.attack = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.attack)) {
        errors.attack = "Debe ser un entero";

    } else if (input.attack < 0) {
        errors.attack = "Minimo 0";

    } else if (input.attack > 250) {
        errors.attack = "Maximo 250";

    }

    if (!input.hp) {
        errors.hp = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.hp)) {
        errors.hp = "Debe ser un entero";

    } else if (input.hp < 0) {
        errors.hp = "Minimo 0";

    } else if (input.hp > 250) {
        errors.hp = "Maximo 250";

    }


    if (!input.defense) {
        errors.defense = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.defense)) {
        errors.defense = "Debe ser un entero";

    } else if (input.defense < 0) {
        errors.defense = "Minimo 0";

    } else if (input.defense > 250) {
        errors.defense = "Maximo 250";

    }



    if (!input.speed) {
        errors.speed = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.speed)) {
        errors.speed = "Debe ser un entero";

    } else if (input.speed < 0) {
        errors.speed = "Minimo 0";

    } else if (input.speed > 250) {
        errors.speed = "Maximo 250";

    }



    if (!input.height) {
        errors.height = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.height)) {
        errors.height = "Debe ser un entero";

    } else if (input.height < 1) {
        errors.height = "Minimo 1";

    } else if (input.height > 25) {
        errors.height = "maximo 25";

    }



    if (!input.weight) {
        errors.weight = "Este dato no se guardara";
    } else if (!Number.isInteger(+input.weight)) {
        errors.weight = "Debe ser un entero";

    } else if (input.weight < 1) {
        errors.weight = "Minimo 1";

    } else if (input.weight > 1000) {
        errors.weight = "Maximo 1000";

    }

    if (!input.img) {
        errors.img = "Este dato no se guardara";
    } else if (!/([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|jpeg|avatars|png|svg|.jpeg|gif|jpg|encrypted)(\?[^\s[",><]*)?/g.test(input.img)
    ) {
        errors.img = "url no valida";

    }

    if (input.types.length === 0 || input.types === undefined) {
        errors.types = 'Este dato no se guardara';
    }

    if ((!errors.hp || errors.hp === 'Este dato no se guardara')
        && (!errors.attack || errors.attack === 'Este dato no se guardara')
        && (!errors.defense || errors.defense === 'Este dato no se guardara')
        && (!errors.speed || errors.speed === 'Este dato no se guardara')
        && (!errors.height || errors.height === 'Este dato no se guardara')
        && (!errors.weight || errors.weight === 'Este dato no se guardara')
        && (!errors.img || errors.img === 'Este dato no se guardara')
    ) {
        errors.button = false;
    } else { errors.button = true; }

    if (errors.name) {
        errors.button = true;
    }




    return errors;
}