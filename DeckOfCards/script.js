// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let url = 'http://deckofcardsapi.com/api/deck'

axios.get(`${url}/new/draw/?count=1`)
    .then(getCard => {
        console.log(`${getCard.data.cards[0].value} OF ${getCard.data.cards[0].suit}`)    
    })
    

// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.
let card1, card2, deckID

axios.get(`${url}/new/draw/?count=1`)
    .then(getCard => {
        card1 = `${getCard.data.cards[0].value} OF ${getCard.data.cards[0].suit}`
        deckID = getCard.data.deck_id
        return axios.get(`${url}/${deckID}/draw/?count=1`)    
    })
    .then(getCard2 => {
        card2 = `${getCard2.data.cards[0].value} OF ${getCard2.data.cards[0].suit}`
        console.log(card1)
        console.log(card2)
    })



// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
axios.get(`${url}/new/shuffle/?deck_count=1`)
    .then(getID => {
        deckID = getID.data.deck_id
    })

$('#new-card').on('click', function() {
    axios.get(`${url}/${deckID}/draw/?count=1`)
        .then(showCard => {
            if (showCard.data.remaining > 0){
                let card = `${showCard.data.cards[0].code}`
                $('#card-img').html(`<img src="http://deckofcardsapi.com/static/img/${card}.png">`)
                console.log(showCard.data.remaining)
            }
            else {
                $('#card-img').append('<h2>Out of cards!</h2>')
            }
            
        })
})

