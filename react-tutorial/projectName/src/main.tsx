import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Parent } from './components/Parent.tsx'
import { UseMemoSample } from './components/UseMemoSample.tsx'
import { Clock } from './components/Clock.tsx'
import Example from './components/Example.tsx'
import Expression from './components/Expression.tsx'

// コールバック関数
const fnArrowObj = (number: number): { result: number} => ({result: number * 2});
console.log(fnArrowObj(3));

type CallbackFunction = () => number;

function print(callback: CallbackFunction): void {
  console.log(callback);
  const result = callback();
  console.log(result);
}

function fn(number: number = 3): number {
  return number * 2;
}

print(fn);

// 配列の型を明示的に定義
// const array: number[] = [10, 20, 30, 40];
// const newArray: number[] = [];

// for(let i: number = 0; i < array.length; i++) {
//   newArray.push(array[i] * 2);
// }

// const array: number[] = [10, 20, 30, 40];
// const newArray: number[] = array.map((num: number): number => num * 2);

// console.log(newArray);

// const array: number[] = [10, 20, 30, 40];
// const newArray: number[] = [];

// for (let i: number = 0; i < array.length; i++) {
//     const val: number = array[i] * 2;
//     if (val > 50) {
//         newArray.push(val);
//     }
// }

// console.log(newArray);

const array: number[] = [10, 20, 30, 40];
const newArray2: number[] = [...array, 10, 40]
const newArray3: number[] = array
const newArray: number[] = array
    .map((num: number): number => num * 2)
    .filter((num: number): boolean => num > 50);

console.log(newArray);
console.log(newArray2);
console.log(newArray3);

// フィボナッチ数列
const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
console.log(sum);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Parent />
    <UseMemoSample />
    <Clock />
    <Example />
    <Expression />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptatum voluptates quisquam facere dolor. Animi iste eveniet voluptates hic, fuga facilis? Maiores vero porro facilis similique quam iusto, molestias sequi.</p>
  </StrictMode>,
)

