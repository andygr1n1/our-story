import { graphql, graphQLClient } from '../graphql'

export const getHeroesQuery = async () => {
    const client = graphQLClient()

    const heroesQuery = graphql(`
        query getHeroes {
            heroes {
                id
                name
            }
        }
    `)

    try {
        return await client.request(heroesQuery).then((res) => res.heroes)
    } catch (error) {
        console.error('getHeroesQuery', error)
        return []
    }
}
