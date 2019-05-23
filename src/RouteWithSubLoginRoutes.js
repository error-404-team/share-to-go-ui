import React from "react"
import {Route} from 'react-router-dom'
export function RouteWithSubLoginRoutes(route) {
    console.log(route);
    
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} {...route} routes={route.routes} />
            )}
        />
    );
}

export default RouteWithSubLoginRoutes;