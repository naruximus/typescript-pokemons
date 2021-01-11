// #1
function concat(a: string, b: string): string {
  return a + b;
}
concat('Hello ', 'World');

// #2
interface MyInter {
  howIDoIt: string;
  simeArray: {
    [n: number]: string | number
  };
  withData?: MyInter[];
}
const MyHometask: MyInter = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// #3
interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (previousValue: U, currentItem: T, index?: number, arr?: T[]) => U, initialValue?: U): U;
}
const tsArr: MyArray<number> = [1, 2, 3, 4, 5]

tsArr.reduce<number>((a, b) => a + b)