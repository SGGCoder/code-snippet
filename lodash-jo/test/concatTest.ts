import { expect } from "https://deno.land/x/expect/mod.ts"
import { concat } from '../arrayUtils/concat.ts'

expect(concat([1234, 123, 43, 1], null, [null], [[123],undefined])).toEqual([1234, 123, 43, 1, null, null, [123],null])
