import call from '../call.util.js';
import nameOf from '../name-of.util.js';
import setProp from '../set-prop.util.js';


const pipe = setProp(
    'length',

    // variadic function will get 0 as length by default
    Infinity,

    (...$$) => setProp(
        'name',
        `pipe(${$$.map(nameOf)})`,
        $ => $$.reduce(call, $),
    ),
);


export default pipe;
