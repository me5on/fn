export default ({

    testMatch: [
        '<rootDir>/(src|tst)/**/*.(spec|test).js',
    ],

    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
    ],

    coverageReporters: [
        'json',
        'lcov',
        'text',
        'text-summary',
    ],


    transform: {},

});
