/*
 * @Author: Droganc
 * @Date: 2022-02-10 18:14:39
 * @LastEditTime: 2022-02-11 11:31:19
 * @LastEditors: Droganc
 * @Description: 
 * @FilePath: /lerna/yunli-design/packages/utils/src/tools.ts
 */

import { get } from 'lodash';

export const isEmpty = () => {
    console.log('empty');
    const a = { b: 1 };
    console.log(get(a, 'b'));
    return 123;
};