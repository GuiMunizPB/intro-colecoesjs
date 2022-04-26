const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const MySet = new Set(arr);

    return [...MySet];
}

console.log(valoresUnicos(meuArray));
