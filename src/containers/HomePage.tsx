import * as React from 'react';
import { connect } from 'react-redux';
import { Store, Photo } from '../reducers/State';
import { initHomePage } from '../actions';
import { Card, Avatar, Icon } from 'antd';

export interface HomePageProps {
  photos: Photo[];
  initHomePage: any
}

class HomePage extends React.Component<HomePageProps, any> {
  componentDidMount(){
    this.props.initHomePage();
  }
  generateStarList(count)
  {
    let starList = [];
    for(var index = 1; index <= 5; index++)
    {
      if(index <= count){
        starList.push(<Icon key={"Icon" + index} type="star" theme="filled" />);
      }
      else{
        starList.push(<Icon key={"Icon" + index} type="star" />);
      }
    }
    return <div>{starList}</div>;
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
            if(review.base64SvgAvatar){
              if(review.star){
                return <Card.Meta  key={'review' + index} avatar={<Avatar src={review.base64SvgAvatar} />} title={review.content} description={this.generateStarList(review.star)} />;
              }
              else{
                return <Card.Meta key={'review' + index} avatar={<Avatar src={review.base64SvgAvatar} />} title={review.content} />;
              }
            }
            else{
              if(review.star){
                return <Card.Meta key={'review' + index} title={review.content} description={this.generateStarList(review.star)} />
              }
              else{
                return <Card.Meta key={'review' + index} title={review.content} />
              }
            }
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