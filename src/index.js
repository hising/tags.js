const Keys = {
    RETURN: 13,
    COMMA: 44,
    COMMA2: 188,
    SPACE: 32
};

class Settings {

    constructor(settings) {
        this.settings = settings;
    }

    hasAll() {
        return Array.from(arguments).every(arg => {
            return this.settings.hasOwnProperty(arg);
        });
    }

    hasAny() {
        return Array.from(arguments).some(arg => {
            return this.settings.hasOwnProperty(arg);
        });
    }

    get(prop) {
       return this.settings.hasOwnProperty(prop) ? this.settings[prop] : false;
    }
}

class TagsJs {
    constructor(options = {}) {
        this.tags = [];
        const defaultOptions = {
            allowSpace: true
        };
        this.settings = new Settings(Object.assign(defaultOptions, options));
        if (!this.settings.hasAny('ref', 'elm', 'selector')) {
            console.error('You need to set either ref, elm or selector');
            return false;
        }

        let elm = this.settings.get('elm');
        elm.addEventListener('keyup', event => {
            if (event.keyCode === Keys.RETURN
                || event.keyCode === Keys.COMMA
                || event.keyCode === Keys.COMMA2
                || (!this.settings.get('allowSpace') && event.keyCode === Keys.SPACE)) {
                this.addTag(elm.value);
            }
        })

    }

    tagify(text) {
        return text;
    }

    addTag(tag) {
        tag = this.tagify(tag);
        if (this.settings.get('unique') && this.tags.includes(tag)) {
            return;
        }
        this.tags.push(tag);
    }
}

export {
    TagsJs
}