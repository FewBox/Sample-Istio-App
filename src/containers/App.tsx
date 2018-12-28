import * as React from 'react';
//import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import ComingSoonPage from './ComingSoonPage';
import langs from '../langs';
import { Store } from '../reducers/State';
import '../components/theme.scss';

export interface AppProps {
  lang : string,
  searchKeyword: any
}

//<FormattedMessage id="Setting.Copyright" />
class App extends React.Component<AppProps, any> {
    render(){
      return (
        <IntlProvider locale={'en'} messages={langs(this.props.lang)}>
        <Router>      
          <div>
            {/* Header */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={ComingSoonPage} />
            </Switch>
            {/* Footer */}
            {/* Util */}
          </div>
        </Router>
        </IntlProvider>    
        );
    }
}

const mapStateToProps = ({setting}: Store) => ({
  lang: setting.lang
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);