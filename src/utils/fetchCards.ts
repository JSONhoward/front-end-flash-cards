export const fetchCards = async (): Promise<FirebaseDocArray> => {
    const response = await fetch(process.env.REACT_APP_GRAPHQL_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-REQUEST-TYPE': 'GraphQL'
        },
        body: JSON.stringify({
            query: fetchAllCardsQuery
        })
    })
    const data = await response.json()
    const {data: {cards}} = data

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]
    }

    return cards
}

const fetchAllCardsQuery = `
query {
    cards {
        id
        Category
        q
        code
        a
    }
}
`