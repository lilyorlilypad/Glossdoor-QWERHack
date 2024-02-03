# Backend


## Environment Variables

Create and populate a `.env` file in the `backend/` directory:

* `DB_CONN_STRING`: MongoDB Atlas connection string of cluster.
* `DB_NAME`: Name of database within cluster to use.


## Running

Start server and listen for requests indefinitely:

```sh
npm start
```

Start server and reload upon change in source files:

```sh
npm run dev
```

You can connect directly to the Atlas cluster from the command line with this
script (requires `mongosh` installed):

```sh
./db-connect.sh
```


## API Endpoints

**:warning: The host and port are hard-coded to `localhost` and `4242`
respectively at the moment.**

TODO.
