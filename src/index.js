import compose from './compose.fn.js';
import ident from './ident.fn.js';
import k from './k.fn.js';
import noop from './noop.fn.js';
import pipe from './pipe.fn.js';
import tie from './tie.fn.js';


const fn = (

    _ => fn

);


Object.assign(
    fn,
    {
        noop,
        ident,
        k,
        tie,
        compose,
        pipe,
    },
);


export default fn;
