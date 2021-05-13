const pipe = (

    (...args) => $ => args.reduce(
        ($, fn) => fn($),
        $,
    )

);


export default pipe;
