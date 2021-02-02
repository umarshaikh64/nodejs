# @node-novel/normalize

    normalize file name for sort


## install

```
npm install @node-novel/normalize
```

## demo

```ts
import { normalize_strip, normalize_val } from '@node-novel/normalize';

let text = '00090_2章 不希望獨占的日子結束的面具工薪族版.txt';

console.log(normalize_strip(text));
// => 2章 不希望獨占的日子結束的面具工薪族版.txt

console.log(normalize_val(text));
// => 00090_00002章_不希望独占的日子結束的面具工薪族版.txt
```
