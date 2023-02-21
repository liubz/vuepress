# TypeScript


## 对象类型接口
```ts

interface Person {
   readonly id: number; // 只读属性
    name: string;
    age?: number; // 可选属性
    [propName: string]: any; // 允许有任意的属性
}
```
