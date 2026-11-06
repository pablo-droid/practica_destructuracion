//1
const ex1 = () => {
    let a = 5, b = 10;

    [a, b] = [b, a];

    console.log(a); // 10
    console.log(b); // 5
};
//ex1();

//2
const segundoElemento = ([, secondElement]) => {
    return secondElement;
};
//console.log(segundoElemento([1, 2, 3, 4]));

//3
const ex3 = () => {
    const persona = { edad: 25 };

    const { nombre = 'Desconocido' } = persona;

    console.log(nombre); // 'Desconocido'
};
//ex3();

//4
const sumarTres = ([a, b, c,]) => {
    return a + b + c;
};
//console.log(sumarTres([4, 5, 6, 7])); // 15

//5
const sinPrimero = ([a, ...elements]) => {
    return [elements]
};
//console.log(sinPrimero([1, 2, 3, 4])); // [2, 3, 4]

//6
const ex6 = () => {
    const persona = {
        nombre: "Roberto",
        direccion: {
            ciudad: "Quito",
            pais: "Ecuador",
        },
    };

    const {nombre, direccion: {pais}} = persona;

    console.log(nombre); // 'Roberto'
    console.log(pais); // 'Ecuador'
};
//ex6();

//7
const ex7 = () => {
    const persona = { nombre: "Ana", edad: 28 };
    const detalles = { profesion: "Ingeniera", pais: "España" };

    const {nombre, edad} = persona;
    const {profesion, pais} = detalles;

    console.log({ nombre, edad, profesion, pais });
    // { nombre: 'Ana', edad: 28, profesion: 'Ingeniera', pais: 'España' }
};
//ex7();

//8
const config = { host: "localhost", port: 8080 };
const conectar = ({host, port}) => {
    return `Conectando a ${host} en el puerto ${port}`;
};
//console.log(conectar(config)); // Conectando a localhost en el puerto 8080

//9
const ex9 = () => {
    const personas = [{ nombre: "Juan" }, { nombre: "Pedro" }];
    const [, {nombre}] = personas;
    console.log(nombre); // 'Pedro'
};
//ex9();
