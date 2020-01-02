import { find } from './helperFunction';

describe('utils backend', () => {
  it('find - should return an object', () => {
    const res = find([{ id: 0, name: 'brewyn' }], 0);

    expect(res).toEqual({
      index: 0,
      user: { id: 0, name: 'brewyn' },
    });
  });

  it('find - should return undefined', () => {
    const res = find([], 0);

    expect(res).toBeDefined();
  });
});
