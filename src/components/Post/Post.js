import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../../actions/ActionCreators";
import PostCard from "./PostCard/PostCard";
import "./Post.css";

class Post extends Component {
  componentDidMount() {
    const {fetchPost, match} = this.props;
    const {id} = match.params;

    fetchPost(id);
  }

  goBack = e => {
    e.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const {location, data} = this.props;
    const {state = {}} = location;
    const {modal} = state;

    if (modal) {
      return (
        <div>
          <div
            onClick={this.goBack}
            className="modal-wrapper"
          >
            <div
              className="modal"
            >
              <PostCard data={data}/>
            </div>
          </div>
        </div>
      );
    } else {
      return <PostCard data={data}/>;
    }
  }
}

const mapStateToProps = state => ({
  data: state.PostReducer,
});

export default connect(mapStateToProps, {fetchPost})(Post);
