import call from '../call.util.js';
import nameOf from '../name-of.util.js';
import setProp from '../set-prop.util.js';


const compose = setProp(
    'length',

    // variadic function will get 0 as length by default
    Infinity,

    (...$$) => setProp(
        'name',
        `compose(${$$.map(nameOf)})`,
        $ => $$.reduceRight(call, $),
    ),
);


export default compose;
