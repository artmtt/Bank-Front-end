// Esto debe ser obtenido con una API
const values_equivalent = new Map([
    // usd
    ['usd', new Map([
        ['mxn', 20.537223],
        ['eur', 0.97743368],
        ['gbp', 0.83319707],
        ['jpy', 138.14429]
    ])],
    // mxn
    ['mxn', new Map([
        ['usd', 0.0486921],
        ['eur', 0.0475977 ],
        ['gbp', 0.040591455],
        ['jpy', 6.7324259]
    ])],
    // eur
    ['eur', new Map([
        ['usd', 1.02309],
        ['mxn', 21.009426],
        ['gbp', 0.85257221],
        ['jpy', 141.42858]
    ])],
    // gbp
    ['gbp', new Map([
        ['usd', 1.20020],
        ['mxn', 24.6357],
        ['eur', 1.17278],
        ['jpy', 165.83957]
    ])],
    // jpy
    ['jpy', new Map([
        ['usd', 0.00723881],
        ['mxn', 0.148535],
        ['eur', 0.00707071],
        ['gbp', 0.00602992]
    ])]
]);

export default values_equivalent;