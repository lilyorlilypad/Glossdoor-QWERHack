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
  * Optional query parameter `companyName` to filter by companies whose name
    *contain* (case-insensitive) the value e.g.
    `/companycatalogs?companyName=GreenTech%20Solutions`.
  * Optional query parameters `ratingGreater` and/or `ratingLess` to filter by
    companies whose average overall rating (metric A) are in the specified
    range.
* GET `/companycatalogs/:companyId`
* POST `/companycatalogs`
* PUT `/companycatalogs/:companyId`
* DELETE `/companycatalogs/:companyId`
* GET `/companycatalogs/metrics/:companyId` Get the metrics of a company from
  its reviews.
* POST `/companycatalogs/rating/:companyId` Set the `averageMetricA` property of
  the company. The rating is a query parameter e.g.
  `/companycatalogs/rating/ID_HERE?=rating=4.6`.

### Reviews API

* GET `/reviews`
* GET `/reviews/:reviewId`
* POST `/reviews`
* PUT `/reviews/:reviewId`
* DELETE `/reviews/:reviewId`
* GET `/reviews/company/:companyId` Get all reviews associated with a company.


### Comments API

* GET `/comments`
* GET `/comments/:commentId`
* POST `/comments`
* PUT `/comments/:commentId`
* DELETE `/comments/:commentId`
* GET `/comments/user/:userId` Get all comments created by a user.


### Affinity Groups API

* GET `/affinitygroups`
* GET `/affinitygroups/:groupId`
* POST `/affinitygroups`
* PUT `/affinitygroups/:groupId`
* DELETE `/affinitygroups/:groupId`
* GET `/affinitygroups/company/:companyId` Get all affinity groups in the
  company.


### Wishlist API

* GET `/wishlists`
* GET `/wishlists/:wishlistId`
* POST `/wishlists`
* PUT `/wishlists/:wishlistId`
* DELETE `/wishlists/:wishlistId`
* GET `/wishlists/company/:companyId` Get all wishlists associated with a
  company.
