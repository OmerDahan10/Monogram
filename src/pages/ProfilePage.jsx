import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { PostPreview } from "../cmps/PostPreview";
import { loadPosts, updatePost, deletePost } from "../store/post.action.js";
import { ReactComponent as CloseIcon } from "../img/svg/close.svg";
import { storageService } from "../services/async-storage.service.js";

class _ProfilePage extends React.Component {

    componentDidMount() {
        this.props.loadPosts();
    }


    render() {
        

        return (
            <div>
            </div>
        )
    }

};

const mapDispatchToProps = {
    loadPosts,
    updatePost,
    deletePost,
};

export const ProfilePage = connect(null, mapDispatchToProps)(_ProfilePage);
