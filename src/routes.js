import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';


export default(
    <Route path="/" component={App}>
        {/* <IndexRoute component={PostIndex}/>
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostsShow}/> */}
    </Route>
)
