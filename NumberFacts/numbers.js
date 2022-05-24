// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

let baseURL = 'http://numbersapi.com'
let getNumFact = axios.get(`${baseURL}/23?json`)
    .then(p1 => {
        console.log(p1.data.text)
    })


// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let getNumFacts = axios.get(`${baseURL}/23..25,99?json`)
    .then(p2 => {
        $('ul').append(`<li>${p2.data['23']}</li>`)
        $('ul').append(`<li>${p2.data['24']}</li>`)
        $('ul').append(`<li>${p2.data['25']}</li>`)
        $('ul').append(`<li>${p2.data['99']}</li>`)
    })

    $("<h1>").text(`hi`)


// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let get4Facts = axios.get(`${baseURL}/23`)
.then(p1 => {
    $('ul').append(`<li>${p1.data}</li>`)
    return axios.get(`${baseURL}/23`)
})
.then(p2 => {
    $('ul').append(`<li>${p2.data}</li>`)
    return axios.get(`${baseURL}/23`)
})
.then(p3 => {
    $('ul').append(`<li>${p3.data}</li>`)
    return axios.get(`${baseURL}/23`)
})
.then(p4 => {
    $('ul').append(`<li>${p4.data}</li>`)
})
