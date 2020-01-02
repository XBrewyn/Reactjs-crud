import { validation, find } from './helperFunction';

describe('Validation Function', () => {
  it('Should return a string', () => {
    expect(validation(['id', 'id'], 'something1234')).toBe('something');
  });

  it('Should return undefined', () => {
    expect(validation(['id', 'name'], 'something1234')).toBeDefined();
  });
});

describe('Find Function', () => {
  it('Should return an object', () => {
    const res = find([{ id: 0, name: 'brewyn' }], 0);

    expect(res).toEqual({
      index: 0,
      user: { id: 0, name: 'brewyn' },
    });
  });

  it('Should return undefined', () => {
    const res = find([], 0);

    expect(res).toBeDefined();
  });
});
