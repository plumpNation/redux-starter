import { initialState, postsReducer } from './post-state';

describe('post-state', () => {
  describe('GIVEN that I have an empty initial state', () => {
    describe('WHEN I add a post', () => {
      test('THEN that post will exist in the state', () => {
        const addAction = {
          type: 'ADDED',
          payload: {
            title: 'Some test post',
            description: 'A longer description',
          },
        };

        const result = postsReducer(initialState, addAction);
        const lastUpdated = initialState.updated;
        const addedPost = result.posts[0];

        expect(result.posts).toHaveLength(1);

        expect(addedPost).toBeTruthy();
        expect(addedPost.title).toEqual('Some test post');
        expect(addedPost.description).toEqual('A longer description');

        expect(lastUpdated.valueOf()).toBeLessThan(result.updated.valueOf());
      });
    });
  });
});