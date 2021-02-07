import { expect } from "https://deno.land/x/expect/mod.ts"
import { difference } from '../arrayUtils/difference.ts'

expect(difference([1, 2, 3, 4, 5, 6, [12]], [2, 3, 5, 7, [12]])).toEqual([1, 4, 6, [12]])