export const BACKEND_HOST = "localhost";
export const BACKEND_PORT = 4242;

const apiConfig = {
  baseUrl: `http://${BACKEND_HOST}:${BACKEND_PORT}`,
  users: {
    getAll: "/users",
    getById: (userId) => `/users/${userId}`,
    create: "/users",
    update: (userId) => `/users/${userId}`,
    delete: (userId) => `/users/${userId}`,
  },
  companyCatalogs: {
    getAll: "/companycatalogs",
    getById: (companyId) => `/companycatalogs/${companyId}`,
    create: "/companycatalogs",
    update: (companyId) => `/companycatalogs/${companyId}`,
    delete: (companyId) => `/companycatalogs/${companyId}`,
  },
  reviews: {
    getAll: "/reviews",
    getById: (reviewId) => `/reviews/${reviewId}`,
    create: "/reviews",
    update: (reviewId) => `/reviews/${reviewId}`,
    delete: (reviewId) => `/reviews/${reviewId}`,
    getByCompanyId: (companyId) => `/reviews/company/${companyId}`,
  },
  comments: {
    getAll: "/comments",
    getById: (commentId) => `/comments/${commentId}`,
    create: "/comments",
    update: (commentId) => `/comments/${commentId}`,
    delete: (commentId) => `/comments/${commentId}`,
    getByUserId: (userId) => `/comments/user/${userId}`,
  },
  affinityGroups: {
    getAll: "/affinitygroups",
    getById: (groupId) => `/affinitygroups/${groupId}`,
    create: "/affinitygroups",
    update: (groupId) => `/affinitygroups/${groupId}`,
    delete: (groupId) => `/affinitygroups/${groupId}`,
  },
  wishlists: {
    getAll: "/wishlists",
    getById: (wishlistId) => `/wishlists/${wishlistId}`,
    create: "/wishlists",
    update: (wishlistId) => `/wishlists/${wishlistId}`,
    delete: (wishlistId) => `/wishlists/${wishlistId}`,
    getByCompanyId: (companyId) => `/wishlists/company/${companyId}`,
  }
};

export default apiConfig;
