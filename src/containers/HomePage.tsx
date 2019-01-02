import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../reducers/State';
import { initHomePage } from '../actions';

export interface HomePageProps {
  photos: any;
  initHomePage: any
}

class HomePage extends React.Component<HomePageProps, any> {
  componentDidMount(){
    this.props.initHomePage();
  }
  render() {
    return (
      <div>
        <div>Hi FewBox</div>
        <div>{this.props.photos.map((photo, index) => {
          return <img key={'photo' + index} src={photo.urls.thumb} />;  
        })}</div>
      </div>
    );
  }
}

const mapStateToProps = ({home}: Store) => ({
  photos: home.photos
});

const mapDispatchToProps = {
  initHomePage
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);