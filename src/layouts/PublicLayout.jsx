import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';

export default function PublicLayout ({children}) {
    return (
        <div>
            <h2>Public</h2>
            {children}
        </div>
    )
};