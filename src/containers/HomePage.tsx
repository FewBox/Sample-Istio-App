import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Photo } from '../reducers/State';
import { initHomePage } from '../actions';
import { Card, Avatar } from 'antd';

export interface HomePageProps {
  photos: Photo[];
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
          let card = <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src={photo.urls.thumb} key={'photo' + index} />}
        >
          {photo.reviews.map((review, index)=>{
            return <Card.Meta avatar={<Avatar src={review.base64SvgStar} />} title={review.content} description="www.fewbox.com"/>
          })}
        </Card>;
          return card;  
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