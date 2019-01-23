const FetchQuest = require(".")

FetchQuest({
    "method": "GET",
    "url": "http://localhost:7070/v1/ping",
}).then((response) => {
    console.log(response)
})
