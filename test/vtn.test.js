import { mod } from '../src'
import test from 'ava'

test('Modulo two integers', t => {
    const expect = 4 % 6
    const actual = mod(4,6)
    t.deepEqual(expect,actual)
})