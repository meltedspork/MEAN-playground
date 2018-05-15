const minimist = require('minimist')

module.exports = () => {
  console.log('Welcome to the outside!')

  const args = minimist(process.argv.slice(2))
  const cmd = args._[0]

  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
