import { sub } from '../src'
import test from 'ava'

test('substracting two numbers', t => {
    const expect = 4 - 6
    const actual = sub(4,6)
    t.deepEqual(expect,actual)
})