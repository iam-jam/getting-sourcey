# Let's get sourcey!

A project to demonstrate the cool things you can do with the Gridsome [data store](https://gridsome.org/docs/data-store-api/) and [schema](https://gridsome.org/docs/schema-api/) APIs.

## Local development

### 01 the API

(this requires the npm [http-server](https://www.npmjs.com/package/http-server) package to be installed globally on your system)

1. Clone the API repo `git clone git@github.com:iam-jam/getting-sourcey-api.git`
2. Move into the directory `cd getting-sourcey-api`
3. Start the server `http-server` (http-server will print out URL it can be accessed on - you'll need this in the next step)

### 02 the app

1. Clone this repo `git clone git@github.com:iam-jam/getting-sourcey.git`
2. Move into the directory `cd getting-sourcey`
3. Copy the example environment variables file `cp .env.example .env`
4. Edit your new `.env` file so the `API_URL` matches endpoint
5. `gridsome develop` 🚀