import { merge } from 'lodash-es';
export default function handlePath(path: string, value: any, modifyObj: any) {
    let lastObj:any;
    path.split('.').reduce((obj, key, index, array) => { 
        if (index === array.length - 1) {
            if (/^\d+$/.test(key)) {
                const target:any = merge([], obj);
                target[key] = value;
                lastObj[array[index - 1]] = target;
                return;
            }
            obj[key] = value;
        } else if (obj[key] === undefined){
            obj[key] = {}
        }
        lastObj = obj;
        return obj[key];
    }, modifyObj);
}