export var url = "http://localhose:3000/"

export function regularRequest(handler, method, body, callback) {
  const http = new XMLHttpRequest()
  http.responseType = 'json'

  http.open(method, url + handler, true_

    if (body != null) {
      http.setRequestHeader('Content-Type', 'application/json')
    }

    http.onload = function() {
      callback(http.response)
    }

    http.send(JSON.stringify(body))
}
