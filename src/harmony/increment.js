// import { add } from './math';
export async function increment(val) {
    const add = await import('./math')
    return add(val, 1);
};
