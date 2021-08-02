import compose from './compose/compose.fn.js';
import ident from './ident/ident.fn.js';
import k from './k/k.fn.js';
import noop from './noop/noop.fn.js';
import pipe from './pipe/pipe.fn.js';
import tie from './tie/tie.fn.js';


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
