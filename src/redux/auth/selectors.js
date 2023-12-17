export const selectUser = state => state.auth.user;

export const selectIsloggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectStatus = state => state.auth.status;
