import { RECIPES_LIST_DATA } from './recipes-list-data';

describe('RECIPES_LIST_DATA', () => {
  it('should have recipes', () => {
    expect(RECIPES_LIST_DATA.recipes.length).toBeGreaterThan(0);
  });
});