const call = ($, fn) => fn($);


const pipe = (

    (...$$) => $ => $$.reduce(call, $)

);


const withValue = $ => {
    const descriptor = Object.create(null);
    descriptor.value = $;
    return descriptor;
};

// variadic functions get 0 as length by default
Object.defineProperty(pipe, 'length', withValue(Infinity));


export default pipe;
