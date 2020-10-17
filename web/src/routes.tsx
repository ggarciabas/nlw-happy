import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/nlw-happy' exact component={Landing} />
                <Route path='/nlw-happy/app' component={OrphanagesMap} />
                <Route path='/nlw-happy/orphanage/create' component={Orphanage} />
                <Route path='/nlw-happy/orphanage/:id' component={CreateOrphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;