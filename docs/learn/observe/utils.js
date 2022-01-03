/* eslint-disable */
export const def = function (obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}

export function parsePath(str) {
  const segments = str.split('.');
  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
      if (obj[segments[i]] === undefined) return;
      obj = obj[segments[i]]
    }
    return obj
  }
}