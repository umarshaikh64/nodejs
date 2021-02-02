# @node-novel/sort

    sort callback for @node-novel

[API](https://github.com/bluelovers/ws-node-novel/tree/master/packages/node-novel-sort/index.ts)

```typescript
import { defaultSortCallback, createSortCallback } from '@node-novel/sort';

let arr1: string[] = [];

arr1.sort(defaultSortCallback);

let arr2: {key: string, name: string}[] = [];

arr2.sort(function (a, b)
{
    return defaultSortCallback(a.key, b.key)
    || defaultSortCallback(a.name, b.name)
})
```
