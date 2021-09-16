### apiwrappers.js

APIs we support:

* Chuck Norris API
* Animal API
* Apple API
* DadJoke API
* Oxford API
* Meme API
* Urban Dictionary
* Currency Converter

**What is this?**


As you all know its very hard to find apis and then do some request stuff, we took care of this. We are trying to put every useful api in this project and then make pure functions which return promises. 


**Can I contribute?**


Sure why not? Its 100% open source project, I would if you contribute int this project.


**Great show some examples**


```js
import { getChuckNorrisJoke } from 'apiwrappers.js'
getChuckNorrisJoke().then(data => console.log(data))

```

This will return a chuck norris joke, there some args you can enter for catagories



**One of the great and big api wrapping**


*Oxford API*


First of all generate an api key from https://developer.oxforddictionaries.com/ and now lets get started.


```js
import { Oxford } from 'apiwrappers.js'
const api = new Oxford(appId, appKey, language="en-gb")

api.getWordDefination('people').then(data => console.log(data))
```