import { USER_LIST_DATA } from './user-list-data';

describe('USER_LIST_DATA', () => {
  it('should be truthy', () => {
    expect(USER_LIST_DATA).toBeTruthy();
  });

  it('should have users', () => {
    expect(USER_LIST_DATA.users.length).toBeGreaterThan(0);
  });

  it('should have the correct total', () => {
    expect(USER_LIST_DATA.total).toBe(208);
  });
});