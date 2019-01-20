# FetchQuest #

An easier-to-use wrapper around `window.fetch`, so you don't have to write all that tedious syntax whenever you want to make a request.

### How to Use ###

- Accepts a request object, like you would with `window.fetch`.
- Returns a promise with your response.
- Throws an error if the response is a 4xx or 5xx.
- If you response can be parsed a json, it is returned as json.
- If your request body can be stringified, it is stringified.

```js
FetchQuest({
    "method": "GET",
    "url": "https://github.com",
}).then((response) => {
    console.log(response)
})
```

```js
FetchQuest({
    "method": "GET",
    "url": "https://github.com",
    "headers": {"Authorization": "Bearer 1234567890"}
}).then((response) => {
    console.log(response)
})
```

```js
FetchQuest({
    "method": "POST",
    "url": "https://github.com",
    "body": {"message": "Hello World!"}
}).then((response) => {
    console.log(response)
})
```
