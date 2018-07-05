class TagsJs {
    constructor(options = {}) {
        const defaultOptions = {};
        const settings = Object.assign(defaultOptions, options);
        console.log("new tag", settings);
    }
}

export {
    TagsJs
}