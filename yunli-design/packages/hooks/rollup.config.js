/*
 * @Author: Droganc
 * @Date: 2022-02-10 18:14:03
 * @LastEditTime: 2022-02-11 09:53:28
 * @LastEditors: Droganc
 * @Description: 
 * @FilePath: /lerna/yunli-design/packages/hooks/rollup.config.js
 */
import pakg from './package.json';
import { createConfig } from '../../scripts/create.rollup.config';

export default createConfig(pakg, 'yunli-hooks');
