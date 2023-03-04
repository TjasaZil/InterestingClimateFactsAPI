# Interesting Climate Facts API

Interesting Climate Facts is a free open source API that provides the user with different facts and figures about environment. If you are interested in contributing, please check out the Contributors Guide.

## API Reference:

- List all of the facts
- Get a random fact
- Get a fact by id
- Get facts by term

## Get all facts

Returns a list of all the facts

```js
GET / facts;
```

## Get a random fact

Returns a single random fact.

```js
GET / random;
```

## Get a fact by id

Returns a fact with a specific id. Returns 404 if

```js
GET /fact/:id
```

## Get facts by term

Returns all of the facts that include a term. Returns 404 if there are no facts that include the searches term.

```js
GET /search/:term
```

### Facts scraped from:

- [Sustainability at Georgetown University](https://sustainability.georgetown.edu/50-facts-for-50-years/)
- [EarthEcho International](https://www.earthecho.org/news/did-you-know-some-interesting-facts-about-the-environment)
- [The World Counts](https://www.theworldcounts.com/stories/facts-about-the-environment)

### Technology used:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Cheerio](https://cheerio.js.org/)
- [Axios](https://axios-http.com/docs/intro)
