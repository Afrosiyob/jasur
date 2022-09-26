import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteAuth = ( { component: Component, ...rest } ) => {
  const token = localStorage.getItem( "token" );

  const { loading, userData } = useSelector( state => state.authReducer );

  console.log( userData );

  return (
    <Route
      { ...rest }
      render={ ( props ) => {
        if ( true ) {
          return (
            <Component { ...props } />
          )
        } else {
          if ( true ) {
            return (
              <Redirect
                to={ {
                  pathname: "/admin",
                  state: { from: props.location },
                } }
              />
            )
          }
          else if ( true ) {
            return (
              <Redirect
                to={ {
                  pathname: "/super-admin",
                  state: { from: props.location },
                } }
              />
            )
          }
          else if ( true ) {
            return (
              <Redirect
                to={ {
                  pathname: "/teacher",
                  state: { from: props.location },
                } }
              />
            )
          } else if ( true ) {
            return (
              <Redirect
                to={ {
                  pathname: "/monitoring",
                  state: { from: props.location },
                } }
              />
            )
          }

        }
      }
      }
    />
  );



}
