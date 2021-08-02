const withValue = $ => {
    const descriptor = Object.create(null);
    descriptor.value = $;
    return descriptor;
};


const setProp = (key, val, fn) => {
    try {
        Object.defineProperty(fn, key, withValue(val));
    } catch (e) {
        // nothing to do here, not the end of the world
    }
    return fn;
};


const setProps = (first, rest, fn) => {

    const args = rest.map(arg => String(arg));
    const name = `${first.name}(${args})`;
    const source = first.toString();

    setProp('name', name, fn);
    setProp('args', args, fn);
    setProp('toString', () => source, fn);

    return fn;
};


const tie = (

    ($, ...$$) => setProps($, $$, $.bind(null, ...$$))

);


export default tie;
