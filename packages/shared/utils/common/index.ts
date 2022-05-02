import { cloneDeep, clamp } from 'lodash-es';
function deepClone<T>(obj: T): T {
  return cloneDeep(obj);
}

function _clamp(n: number): number {
  return clamp(n, -5, 5);
}
export default { deepClone, _clamp };
