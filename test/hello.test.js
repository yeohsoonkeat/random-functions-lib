import { hello } from '../src'
import test from 'ava'

test('concantinating hello to an arguement', t => {
    const expect = 'hello keat'
    const actual = hello()
    t.is(expect,actual)
})