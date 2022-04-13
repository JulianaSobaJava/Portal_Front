// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { isAdmin, isAuthenticated } from "../services/auth";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

// const RouteNonAcess = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

// const AdminRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAdmin() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

// export { AdminRoute, PrivateRoute, RouteNonAcess };
