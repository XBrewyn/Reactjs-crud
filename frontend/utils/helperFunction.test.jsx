import { validation } from './helperFunction';

describe('utils frontend', () => {
  it('validation - should return a string', () => {
    expect(validation(['id', 'id'], 'something1234')).toBe('something');
  });

  it('validation - should return undefined', () => {
    expect(validation(['id', 'name'], 'something1234')).toBeDefined();
  });
});
