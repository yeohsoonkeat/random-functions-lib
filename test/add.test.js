import { add } from '../src'
import test from 'ava'

test('Adding two integers', t => {
    const expect = 4 + 6
    const actual = add(4,6)
    t.deepEqual(expect,actual)
})