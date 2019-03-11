export default welcome
/**
 * 
 * @param {string} name
 * @default welcome to KIT
 * @returns {string} -welcome to name
 */
function welcome(name = 'KIT'){
    return `welcome to ${name}`
}