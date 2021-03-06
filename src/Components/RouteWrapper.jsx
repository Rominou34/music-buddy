import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';

export default function RouteWrapper ({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
        <Layout {...props}>
            <Component {...props} />
        </Layout>
        } />
    )
}