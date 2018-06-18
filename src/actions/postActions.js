import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
}

export const createPost = (newPost) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(result => result.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
}