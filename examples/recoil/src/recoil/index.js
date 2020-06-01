import { atom, selector } from 'recoil';

export const counterState = atom({
  key: 'counter',
  default: 0,
});

export const powState = selector({
  key: 'tempCelcius',
  get: ({ get }) => {
    return get(counterState);
  },
  set: ({ set }, newValue) => {
    if (newValue === 0) {
      return set(counterState, 1);
    }
    return set(counterState, newValue * 2);
  },
});
