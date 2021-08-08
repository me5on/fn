import setProp from '../set-prop.util.js';


const K = (

    $ => setProp('name', `K(${String($)})`, () => $)

);


export default K;
