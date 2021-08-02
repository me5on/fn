const withValue = $ => {
    const descriptor = Object.create(null);
    descriptor.value = $;
    return descriptor;
};


const setProp = (fn, key, val) => {
    try {
        Object.defineProperty(fn, key, withValue(val));
    } catch (e) {
        // nothing to do here, not the end of the world
    }
    return fn;
};

const K = (

    $ => setProp(() => $, 'name', `K(${String($)})`)

);


export default K;
