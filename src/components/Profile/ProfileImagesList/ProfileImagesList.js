import React, {Component} from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import "./ProfileImagesList.css";
import ImagesReducer from "../../../reducers/ImagesReducer";
import {connect} from "react-redux";
import {fetchImages, fetchPost} from "../../../actions/ActionCreators";
import {chunkArray} from "../../../services/Utils";
import ImagesRow from "./ImagesRow/ImagesRow";
import Spin from "antd/es/spin";

class ProfileImagesList extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const {isFetching, images} = this.props.data;
    return (
      <div className="images-list">
        {chunkArray(images, 3).map((images, key) => (
            <ImagesRow images={images} rowKey={key}/>
          ))}
        {isFetching && <Spin tip="Loading..."/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.ImagesReducer,
});

export default connect(mapStateToProps, {fetchImages, fetchPost})(ProfileImagesList);
