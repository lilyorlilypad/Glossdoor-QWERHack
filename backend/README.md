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


### Users API

* GET `/users`
* GET `/users/:userId`
* POST `/users`
* PUT `/users/:userId`
* DELETE `/users/:userId`


### Company Catalogs API

* GET `/companycatalogs`
* GET `/companycatalogs/:companyId`
* POST `/companycatalogs`
* PUT `/companycatalogs/:companyId`
* DELETE `/companycatalogs/:companyId`


### Reviews API

* GET `/reviews`
* GET `/reviews/:reviewId`
* POST `/reviews`
* PUT `/reviews/:reviewId`
* DELETE `/reviews/:reviewId`


### Comments API

* GET `/comments`
* GET `/comments/:commentId`
* POST `/comments`
* PUT `/comments/:commentId`
* DELETE `/comments/:commentId`


### Affinity Groups API

* GET `/affinitygroups`
* GET `/affinitygroups/:groupId`
* POST `/affinitygroups`
* PUT `/affinitygroups/:groupId`
* DELETE `/affinitygroups/:groupId`


### Wishlist API

* GET `/wishlists`
* GET `/wishlists/:wishlistId`
* POST `/wishlists`
* PUT `/wishlists/:wishlistId`
* DELETE `/wishlists/:wishlistId`
* GET `/wishlists/company/:companyId` Get all wishlists associated with a
  company.
