import React, { useReducer, useContext, useState } from "react";
import axios from "axios";

export const ContentContext = React.createContext();
const contentAxios = axios.create();

contentAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function ContentProvider(props) {

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    posts: [
      {
        _id: "",
        title: "",
        imgUrl: "",
        description: "",
        user: "",
        comments: [],
        upvotes: [],
        downvotes: [],
        timestamp: "",
        __v: 0
      },
    ],
    message: "",
    edit: false
  };

  const [state, dispatch] = useReducer(contentReducer, initState);

  const [singlePost, setSinglePost] = useState()

  function contentReducer(state, action) {
    let newState;
    const prevPosts = [...state.posts];
    switch (action.type) {
      case "getPosts":
        newState = {
          ...state,
          posts: action.value,
          order: action.order
        };
        break;
      case "appendPosts":
        newState = {
          ...state,
          posts: [...state.posts, action.value],
        };
        break;
      case "removePost":
        newState = {
          ...state,
          posts: action.value,
        };
        break;
      case "updatePosts":
        const updatedPostIndex = prevPosts.findIndex(
          (post) => post._id === action.value._id
        );
        prevPosts[updatedPostIndex] = action.value;
        newState = {
          ...state,
          posts: prevPosts,
        };
        break
      case "edit":
        newState = {
          ...state,
          edit: true
        }
        break;
      default:
        throw new Error();
    }
    return newState;
  }


  function getUserPosts() {
    contentAxios
      .get("/api/post/user")
      .then((res) => {
        dispatch({ type: "getPosts", value: res.data });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getAllPosts(){
    contentAxios
      .get("/api/post/")
      .then((res) => {
        dispatch({ type: "getPosts", value: res.data});
        //clean this up so we're not overwriting state
      })
      .catch((err) => console.log(err.response.data.errMsg));
    }

  function addPost(newPost) {
    console.log(newPost)
    contentAxios
      .post("/api/post", newPost)
      .then((res) => {
        dispatch({ type: "appendPosts", value: res.data });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }


  function deletePost(postId) {
    contentAxios
      .delete(`/api/post/${postId}`)
      .then((res) => {
        const freshPosts = state.posts.filter((post) => post._id != postId);
        console.log(freshPosts);
        dispatch({ type: "removePost", value: freshPosts });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // //TODO getComments()
  // //TODO postComment()

  function editPost(postId, editedPost) {
    contentAxios
      .put(`/api/post/${postId}`, editedPost)
      .then((res) => {
        dispatch({ type: "updatePosts", value: res.data });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function upvotePost(postId, voteStatus) {
    contentAxios
      .put(`/api/post/upvote/${postId}`)
      .then((res) => {
        dispatch({ type: "updatePosts", value: res.data });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function downvotePost(postId, voteStatus) {
    contentAxios
      .put(`/api/post/downvote/${postId}`)
      .then((res) => {
        dispatch({ type: "updatePosts", value: res.data });
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function removeUpvote(postId, voteStatus) {
    contentAxios
      .put(`/api/post/removeUpvote/${postId}`)
      .then((res) => {
        dispatch({ type: "updatePosts", value: res.data });
      })
      .catch((err) => console.log(err.reponse.data.errMsg));
  }

  function removeDownvote(postId, voteStatus) {
    contentAxios
      .put(`/api/post/removeDownvote/${postId}`)
      .then((res) => {
        dispatch({ type: "updatePosts", value: res.data });
      })
      .catch((err) => console.log(err.reponse.data.errMsg));
  }

  function addComment(newComment, postId){
    console.log(newComment)
    contentAxios
      .post(`/api/comment/${postId}`, newComment)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err.response.data.errMsg))
  }

  function deleteComment(commentId, postId){
    contentAxios
      .delete( `/api/comment/${postId}/${commentId}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data.errMsg)
      })
  }


  return (
    <ContentContext.Provider
      value={{
        state,
        dispatch,
        getUserPosts,
        // ...userContent,
        getAllPosts,
        addPost,
        deletePost,
        upvotePost,
        downvotePost,
        removeUpvote,
        removeDownvote,
        addComment,
        singlePost,
        setSinglePost,
        deleteComment, 
        editPost
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
}