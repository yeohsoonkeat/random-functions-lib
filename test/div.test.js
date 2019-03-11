import { div } from '../src'
import test from 'ava'

test('division two numbers', t => {
    const expect = 4 / 6
    const actual = div(4,6)
    t.deepEqual(expect,actual)
})