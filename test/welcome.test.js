import { welcome } from '../src'
import test from 'ava'

test('concantinating hello to an arguement', t => {
    const expect = 'welcome to KIT'
    const actual = welcome()
    t.is(expect,actual)
})