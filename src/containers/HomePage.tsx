import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Paging, Home } from '../reducers/State';
import { initHomePage } from '../actions';

export interface HomePageProps {
  data: Home;
  initHomePage: any
}

class HomePage extends React.Component<HomePageProps, any> {
  componentDidMount(){
    this.props.initHomePage();
  }
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
  initHomePage
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);