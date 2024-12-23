import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Parent } from './components/Parent.tsx'
import { UseMemoSample } from './components/UseMemoSample.tsx'

const fnArrowObj = (number: number): { result: number} => ({result: number * 2});
console.log(fnArrowObj(3));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Parent />
    <UseMemoSample />
  </StrictMode>,
)

