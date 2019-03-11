export default hello
/**
 * 
 * @param {string} name
 * @default hello keat
 * @returns {string} -hello name
 */
function hello(name = 'keat'){
    return `hello ${name}`
}