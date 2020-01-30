# Functions

To get a full list of Part Trait descriptions:

```js
Collections.flatMap(collection => collection.parts
  .filter(part => part.ex.type === 'Part Traits')
  .map(part => part.ex.name))
  .sort()
  .reduce((unique, item) => unique.includes(item)
    ? unique
    : [...unique, item], [])
```
