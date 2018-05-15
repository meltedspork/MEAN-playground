const minimist = require('minimist')

module.exports = () => {
  console.log('Welcome to the outside!')
  console.log('----> argv', process.argv)

  const args = minimist(process.argv.slice(2))
  console.log('----> args', args)
}
