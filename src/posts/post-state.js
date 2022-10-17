/**
 * I made the state a little more complicated than an array.
 */
export const initialState = {
  created: new Date(),
  updated: new Date(),
  posts: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDED':
      // You can use immer here if you like, like the course suggests.
      // I am using vanilla js as a demonstration.
      return {
        ...state,
        updated: new Date(),
        posts: state.posts.concat(action.payload),
      }

    case 'REMOVED':
      return {
        ...state,
        updated: new Date(),
        posts: state.posts.filter(post => post.id === action.payload),
      }
    default:
      return state;
  }
}