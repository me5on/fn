const call = ($, fn) => fn($);


const compose = (

    (...$$) => $ => $$.reduceRight(call, $)

);


const withValue = $ => {
    const descriptor = Object.create(null);
    descriptor.value = $;
    return descriptor;
};


// variadic functions get 0 as length by default
Object.defineProperty(compose, 'length', withValue(Infinity));


export default compose;
