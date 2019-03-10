import {
    sub
} from '../src'
import test from 'ava'

test('Adding two integers', t => {
    const expect = 4 - 6
    const actual = sub(4, 6)
    t.deepEqual(expect, actual)
})