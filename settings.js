//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7350299617:AAErmJwSbIxzTqPgP8L4URBX1O6BVqpTa1Y" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "botku" //your bot name
global.OWNER_NAME = "@DGXeon" //your name with sign @
global.OWNER = ["https://t.me/+WEsVdEN2B9w4ZjA9", "https://youtube.com/"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["5965707646"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.ibb.co/Jj0n5zV/thumb.jpg' //your bot pp

global.owner = global.owner = ['62895326205615'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})