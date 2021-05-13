const compose = (

    (...args) => $ => args.reduceRight(
        ($, fn) => fn($),
        $,
    )

);


export default compose;
