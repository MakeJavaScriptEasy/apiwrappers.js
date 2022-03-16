import fetch from 'isomorphic-unfetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

/**
 * Class acting as a wrapper around the Oxford dictionary API
 */
export class Oxford {
    private readonly appId: any;
    private readonly appKey: any;
    private readonly language: string;
    /**
     * 
     * @param {string} appId 
     * @param {string} appKey 
     * @param {string} language Enter the language code, defualt is en-gb
     */
    constructor(appId: string, appKey: string, language = "en-gb") {
        if (appId === null) throw new Error('You must provide a appID');
        if (appKey === null) throw new Error('You must provide a appKey');
        this.appId = appId;
        this.appKey = appKey;
        this.language = language;
    }

    /**
     * 
     * @param {string} word 
     * @returns json
     */
    baseRequest = async (word: string) => {
        try {
            const data = await fetch(`https://od-api.oxforddictionaries.com/api/v2/entries/${this.language}/${word.toLowerCase()}`, {
                method: "GET",
                headers: {
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
            })
            return await data.json()
        } catch (err) {
            return err
        }
    }

    baseRequestTrans = async (word: string, sourceLang: string, targetLang: string): Promise<object> => {
        try {
            const data = await fetch(`https://od-api.oxforddictionaries.com/api/v2/translations/${sourceLang}/${targetLang}/${word}`, {
                method: "GET",
                headers: {
                    'app_id': this.appId,
                    'app_key': this.appKey
                },
            })
            return await data.json()
        } catch (err: any) {
            return err
        }
    }

    /**
     * 
     * @param {string} word 
     * @returns {string} the defination of the specified word
     */
    async getWordDefination(word: string): Promise<string> {
        const data = await this.baseRequest(word)
        return data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
    }
    /**
     * 
     * @param {string} word 
     * @returns {string} gets the grammatical features of the specified word
     */
    async getWordgrammaticalFeature(word: string): Promise<string> {
        const data = await this.baseRequest(word)
        return data.results[0].lexicalEntries[0].entries[0].grammaticalFeatures[0].text
    }
    /**
     * 
     * @param {string} word 
     * @returns {string[]} returns examples of using the word
     */
    async getWordExamples(word: string): Promise<string[]> {
        let em: string[] = []
        const data = await this.baseRequest(word)
        const response = data.results[0].lexicalEntries[0].entries[0].senses
        response.forEach((value: { examples: { text: string; }[]; }) => {
            value.examples.forEach((value: { text: string; }) => {
                em.push(value.text)
            })
        })
        return em
    }

    /**
     * 
     * @param {string} word 
     * @returns {string[]} returns an array of synonyms for the specified word
     */
    async getWordSynonyms(word: string): Promise<string[]> {
        const data = await this.baseRequest(word)
        const res = data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses[0].synonyms
        let em: string[] = []
        res.forEach((value: { text: string; }) => em.push(value.text))
        return em
    }


    /**
     * 
     * @param {string} word 
     * @returns {string[]} no idea what this is
     */
    async getWordLexicalCategory(word: string): Promise<string[]> {
        let em: string[] = [];
        const data = await this.baseRequest(word)
        const res = data.results[0].lexicalEntries
        res.forEach((value: { lexicalCategory: { text: string; }; }) => em.push(value.lexicalCategory.text))
        return em
    }

    async getTranslation(word: string, sourceLang: string, targetLang: string): Promise<object> {
        return await this.baseRequestTrans(word, sourceLang, targetLang)
    }
}

const x = new Oxford("2463a6d3", "1996f1b4ced0e7063c061b5d07f1cd49")
// console.log(x.getTranslation('people', 'en', 'ar').then(data => console.log(data)))