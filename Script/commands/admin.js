const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝗡𝗔𝗛𝗜𝗗𝗨𝗟 𝗜𝗦𝗟𝗔𝗠 𝗡𝗔𝗜𝗠
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝗦𝗜𝗡𝗚𝗟𝗘
┃ 🎂 𝐀𝐠𝐞       : 𝟭𝟳
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝗖𝗛𝗢𝗟𝗧𝗔𝗖𝗘 🤣
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝗦𝗜𝗡𝗚𝗥𝗔, 𝗡𝗔𝗧𝗢𝗥𝗘, 𝗕𝗔𝗡𝗚𝗟𝗔𝗗𝗘𝗦𝗛
┣━━━━━━━━━━━━━━━━━━━━━
┃𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗦𝗜𝗡𝗚𝗥𝗔, 𝗡𝗔𝗧𝗢𝗥𝗘, 𝗥𝗔𝗝𝗦𝗔𝗛𝗜
┃𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:𝗔𝗨𝗞𝗣𝗔𝗥𝗔, 𝗦𝗔𝗩𝗔𝗥, 𝗗𝗛𝗔𝗞𝗔
┣━━━━━━━━━━━━━━━━━━━━━
┃    𝐆𝐦𝐚𝐢𝐥   : inobita179@gmail.com
┃🎭 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽: wa.me/+8801710498589
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @NAHIDULISLAMN
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/fmz.nobita.955288
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/61566927465098/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
