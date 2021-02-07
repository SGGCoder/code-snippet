import { expect } from "https://deno.land/x/expect/mod.ts"
import {compact} from '../arrayUtils/compact.ts'

expect(compact([1,2,30,0,'',null,undefined,32])).toEqual([1,2,30,32])
expect(compact([])).toEqual([])
expect(compact([null])).toEqual([])

