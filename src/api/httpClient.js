const API = 'http://localhost:8000/api'

const post = (url, data, auth = true) => {
    let headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    if (auth) {
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }

    return fetch(url, {
        method: 'post',
        headers,
        body: JSON.stringify(data)
    });
}

const get = (url, auth = true) => {
    let headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    if (auth) {
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    return fetch(url, {
        method: 'get',
        headers,
    }).then(res => res.json());
}

const put = (url = '', data, auth = true) => {
    let headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    if (auth) {
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    return fetch(url, {
        method: 'put',
        headers,
        body: JSON.stringify(data)
    }).then(res => res.json());
}

//Cannot contain a delete method - Cause delete is a keyword.
const del = (url) => {
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    return fetch(url, {
        method: 'delete',
        headers,
    }).then(res => res.json());
}

const HttpClient = {
    post,
    get
}

export {
    HttpClient,
    API
}