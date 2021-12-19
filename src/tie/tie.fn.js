import nameOf from '../util/name-of.util.js';
import setProp from '../util/set-prop.util.js';


const setProps = (first, rest, fn) => {

    const args = rest.map(arg => String(arg));
    const name = `${nameOf(first)}(${args})`;
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
