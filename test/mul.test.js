import { mul } from '../src'
import test from 'ava'

test('multiplication two numbers', t => {
    const expect = 4 * 6
    const actual = mul(4,6)
    t.deepEqual(expect,actual)
})