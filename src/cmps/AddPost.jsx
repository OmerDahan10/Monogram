import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { toggleShowAdd, addPost } from "../store/post.action.js";
import TextareaAutosize from "react-textarea-autosize";
import { uploadImg } from "../services/cloudinary-service.js";
import { ReactComponent as EmojiIcon } from "../img/svg/emoji.svg";
import Picker from "emoji-picker-react";

function _AddPost({ posts, showAdd, user, toggleShowAdd,addPost,history }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onFileSelect = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  const onEmojieClick = (ev, emojiObj) => {
    setText((prevInput) => prevInput + emojiObj.emoji);
  };

    const onAddPost = async () => {
    const url = await uploadImg(file)
    const newPost = {
      by: user,
      comments: [],
      createdAt: Date.now(),
      imgUrl:url,
      likedBy:[],
      loc:{},
      txt:text,
    };
    addPost(newPost);
    history.push('/');
    setFile(null);
    setText('');

  };

  return (
    <>
      {showAdd && (
        <div className="add-container" onClick={toggleShowAdd}>
          <div onClick={(ev) => ev.stopPropagation()} className="add-post">
            {!file && (
              <input
                type="file"
                className="add-photo"
                onChange={onFileSelect}
              />
            )}
            {file && (
              <>
                <section className="add-post-header">
                  <span>Create new post</span>
                  <button className="clean-button share" onClick={onAddPost}>
                    Share
                  </button>
                </section>
                <div className="image-preview">
                  <img src={file} alt="" />
                </div>
                {/* <textarea cols="30" rows="10" placeholder="Write a caption..."></textarea> */}
                <TextareaAutosize
                  value={text}
                  onChange={handleChange}
                  maxRows="5"
                  maxLength="200"
                  className="comment-text"
                  placeholder="Write a caption..."
                />
                <button
                  className="clean-button emoji"
                  type="button"
                  onClick={() => setShowPicker((val) => !val)}
                >
                  <EmojiIcon />
                </button>
                {showPicker && <Picker onEmojiClick={onEmojieClick} />}
              </>
            )}
          </div>
        </div>
      )}
      {!showAdd && <></>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.postModule.posts,
    showAdd: state.postModule.showAdd,
    user: state.userModule.connectedUser,
  };
};

const mapDispatchToProps = {
  toggleShowAdd,
  addPost
};

export const AddPost = connect(mapStateToProps, mapDispatchToProps)(_AddPost);
