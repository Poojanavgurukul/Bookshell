import ButtonAppBar from './Navbar';
import MediaCard from './Cards';
import ResponsiveDrawer from './Category';
import MediaFullCard from './FullDescription';
import AddBook from './Addbookform'
import MediaFullCardAll from './FullDescriptionallbook'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';


class Homepage extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ButtonAppBar} />
                    <Route exact path="/" component={MediaCard} />
                    <Route path="/allbooks" component={ResponsiveDrawer} />
                    <Route path="/summary" component={MediaFullCard} />
                    <Route path="/addbookfrom" component={AddBook} />
                    <Route path="/summaryall" component={MediaFullCardAll} />
                </div>
            </Router>
        )
    }
}

  export default Homepage;  
