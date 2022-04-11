export function test(n: number) {
  const a = 'utils';
  console.log(a, n);
}
const t = () => {
  const a = 'utils';
  console.log(a);
};

const p = new Promise(resolve => {
  resolve(100);
});

t();

p;

const key = 'babel';
const obj = {
  [key]: 'polyfill',
};

obj;
