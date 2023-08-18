/**
 * Create a root reducer and combine all it in
 * Export it
 * Import this root reducer in store.js
 * do proper naming convention
 */

import "./UsersReducer";

const combinedReducers = {
  // Keep reducer key same as reducer name
  UsersReducer,
};

export default combinedReducers;
