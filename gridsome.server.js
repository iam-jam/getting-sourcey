// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {

    const apiUrl = process.env.API_URL

    // Set up our collections
    const sauce = addCollection('Sauce')
    const user = addCollection('User')
    const review = addCollection('Review')

    // And our references
    review.addReference('sauce', 'Sauce')
    review.addReference('user', 'User')

    // Finally load the data...

    // Sauces
    const { data:sauces } = await axios.get(`${apiUrl}/sauces.json`)
    for (const item of sauces) {
      sauce.addNode({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        tags: item.tags
      })
    }

    // Users
    const { data:users } = await axios.get(`${apiUrl}/users.json`)
    for (const item of users) {
      user.addNode({
        id: item.id,
        name: item.name,
        image: item.image
      })
    }

    const { data:reviews } = await axios.get(`${apiUrl}/reviews.json`)
    for (const item of reviews) {
      review.addNode({
        id: item.id,
        sauce: item.sauce,
        user: item.user,
        stars: item.stars,
        review: item.review,
        date: item.date
      })
    }

  })
}
