/*
 * @Author: zhouyinchi
 * @Date: 2021-01-15 14:45:30
 * @LastEditTime: 2021-01-15 14:45:38
 * @LastEditors: zhouyinchi
 * @Description: 
 */
import { expect } from "https://deno.land/x/expect/mod.ts"
import { chunk } from '../arrayUtils/chunk.ts'

expect(chunk([1, 2, 3, 4, 5, 5], 2)).toEqual([[1, 2], [3, 4], [5, 5]])
expect(chunk([1, 2, 3, 4, 5, 5])).toEqual([[1], [2], [3], [4], [5], [5]])