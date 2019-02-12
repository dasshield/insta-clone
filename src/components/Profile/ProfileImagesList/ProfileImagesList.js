import React, {Component} from "react";
import "./ProfileImagesList.css";
import {connect} from "react-redux";
import {fetchImages, fetchPost} from "../../../actions/ActionCreators";
import {chunkArray} from "../../../services/Utils";
import ImagesRow from "./ImagesRow/ImagesRow";
import Spin from "antd/es/spin";
import InfiniteScroll from "react-infinite-scroller";

class ProfileImagesList extends Component {
  state = {
    initialLoad: true
  };

  loadMore = page => {
    this.setState({initialLoad: false});
    this.props.fetchImages(page);
  };

  render() {
    const {images} = this.props.data;
    const {initialLoad} = this.state;

    const items = [];

    chunkArray(images, 3).map((images, key) => {
      items.push(<ImagesRow images={images} key={key} rowKey={key}/>);
    });

    return (
      <InfiniteScroll
        pageStart={0}
        initialLoad={initialLoad}
        loadMore={this.loadMore}
        hasMore
        loader={<Spin key={0} tip="Loading..."/>}
      >
        <div className="images-list">
          {items}
        </div>
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  data: state.ImagesReducer,
});

export default connect(mapStateToProps, {fetchImages, fetchPost})(ProfileImagesList);
