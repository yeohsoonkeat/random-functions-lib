import {join} from 'path'

const include = join(__dirname, ' src')

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'lib'),
        libraryTarget: 'umd',
        library: 'ranfunc'
    },
    devtool: 'source-map',
    module: {
        rules:[{test: /\.js$/, loader: 'babel', include}]}
}