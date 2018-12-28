import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Paging, Home } from '../reducers/State';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

export interface HomePageProps {
  data: Home;
  initHome: any
}

class HomePage extends React.Component<HomePageProps, any> {
  render() {
    return (
      <div>
        Hi FewBox
      </div>
    );
  }
}

const mapStateToProps = ({home}: Store) => ({
});

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);