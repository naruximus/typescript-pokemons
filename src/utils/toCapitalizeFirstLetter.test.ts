import { toCapitalizeFirstLetter } from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать строку и возвращать строку, где первая буква будет в верхнем регистре, а все отсальные в нижнем', () => {
    expect(toCapitalizeFirstLetter('piKaChu GgG')).toBe('Pikachu ggg');
  });
});
