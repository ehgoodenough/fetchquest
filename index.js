const fetch = require("cross-fetch")

module.exports = function FetchQuest(request) {
    if(request.body !== undefined) {
        request.body = JSON.stringify(request.body)
        request.headers = request.headers || {}
        request.headers["Content-Type"] = "application/json"
    }
    return fetch(request.url, request).then((response) => {
        return response.clone().json().catch((error) => {
            return response.text()
        }).then((value) => {
            if(response.status.toString().charAt(0) === "4"
            || response.status.toString().charAt(0) === "5") {
                throw value
            } else {
                return value
            }
        })
    })
}
