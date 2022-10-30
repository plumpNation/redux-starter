// The basic type of the entity we will keep in this part of the store.
export interface Post {
  id: string;
  title: string;
  description: string;
}

/**
 * I made the state a little more complicated than an array.
 */
export const initialState = {
  created: new Date(), // Adding dates so that the example is more than just posts.
  updated: new Date(), // They don't relate to the posts themselves, only the post state.
  posts: [] as Post[],
}

// We _can_ simply use the initialState to derive a type.
// This is fine for this trivial example, as a state gets more complex
// it's not always possible to do this.
// You can create the interface manually if you want.
export type PostState = typeof initialState;

// Action creators...
export const postAddedAction = (post: Post) => ({
  type: 'ADDED' as const, // <-- this is importat, READ BELOW about `as const`
  payload: post
})

export const postRemovedAction = (postId: string) => ({
  type: 'REMOVED' as const,
  payload: postId
})

// `as const` tells typescript that the type of 'ADDED' is NOT a generic string.
// In order to match it's type, type MUST be 'ADDED' itself.
// That's hyper specific. It matches only one thing, the string 'ADDED'.
// This is extremely useful because it means that in the switch case in the
// reducer, typescript will know what is in the payload inside each case.
// It says, ah, the type is 'ADDED', therefore the payload MUST be a Post type.
// You'll know you got it correct when you hover action.payload in the reducer
// and you are told the exact type it is, not a list of types it could be.

// Now, since we are passing many different actions into this reducer, we'll
// need to create a Union Type to represent the possible actions that typescript
// needs to know about.
// Here you can see syntax where I infer the type from the action creator functions
// themselves. Note the combination of `ReturnType` and `typeof`.
export type PostAction =
  | ReturnType<typeof postAddedAction>
  | ReturnType<typeof postRemovedAction>

export const postsReducer = (
  state: PostState = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case 'ADDED':
      // You can use immer here if you like, like the course suggests.
      // I am using vanilla js as a demonstration.
      return {
        ...state,
        updated: new Date(),
        posts: state.posts.concat(action.payload), // hover over payload, it should show it is a `Post`.
      }

    case 'REMOVED':
      return {
        ...state,
        updated: new Date(),
        posts: state.posts.filter(post => post.id === action.payload), // hover payload, should be string
      }

    default:
      return state;
  }
}