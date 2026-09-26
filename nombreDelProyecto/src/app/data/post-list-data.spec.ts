import { POST_LIST_DATA } from './post-list-data';

describe('POST_LIST_DATA', () => {
  it('debe contener publicaciones', () => {
    expect(POST_LIST_DATA).toBeTruthy();
    expect(POST_LIST_DATA.posts.length).toBeGreaterThan(0);
  });
});