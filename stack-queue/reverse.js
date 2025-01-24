import { StackX } from './stack.js';

export class Reverse {
  constructor() {}

  reverse(word) {
    const stack = new StackX(10);
    for (let i = 0; i < word.length; i++) {
      stack.push(word[i]);
    }

    let result = '';

    for (let j = 0; j < word.length; j++) {
      result = result + stack.pop();
    }

    return result;
  }
}
