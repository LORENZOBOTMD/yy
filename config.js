const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "6288295655226"
global.namaowner = "afgann"
global.namabot = "afgann"
global.packname = "dibuat oleh afgan"
global.author = "+62 882-9565-5226"
//==================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})