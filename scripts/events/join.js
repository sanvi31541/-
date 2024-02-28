module.exports.config = {
  name: "join",
  eventType: ['log:subscribe'],
  version: "1.0.0",
  credits: "Mcs-Team", // FIXED BY YAN BADOL
  description: "GROUP UPDATE NOTIFICATION"
};

const fs = require('fs-extra');
const { loadImage, createCanvas, registerFont } = require("canvas");
const request = require('request');
//const { join } = require('path');
const axios = require('axios');
const jimp = require("jimp")
const fontlink = 'https://drive.google.com/u/0/uc?id=10XFWm9F6u2RKnuVIfwoEdlav2HhkAUIB&export=download'
let PRFX = `${global.config.PREFIX}`;

module.exports.circle = async (image) => {
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

let suffix;

module.exports.run = async function({ api, event, Users }) {
  var fullYear = global.client.getTime("fullYear");
  var getHours = await global.client.getTime("hours");
  var session = `${getHours < 3 ? "midnight" : getHours < 8 ? "Early morning" : getHours < 12 ? "noon" : getHours < 17 ? "afternoon" : getHours < 23 ? "evening" : "midnight"}`
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/dhaka').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const time = moment.tz("Asia/dhaka").format("hh:mm:ss - DD/MM/YYYY");
  const hours = moment.tz("Asia/dhaka").format("hh");
  const { commands } = global.client;
  const { threadID } = event;
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  if (!event.logMessageData.addedParticipants || !Array.isArray(event.logMessageData.addedParticipants)) {
    return;
  }
  if (event.logMessageData.addedParticipants && Array.isArray(event.logMessageData.addedParticipants) && event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    //api.changeNickname(`𝗕𝗢𝗧 ${(!global.config.BOTNAME) ? "Buddy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

    let gifUrl = 'https://i.imgur.com/NDS3m2l.jpeg';
let gifPath = __dirname + '/Nayan/join/join.mp4';

axios.get(gifUrl, { responseType: 'arraybuffer' })
.then(response => {
    fs.writeFileSync(gifPath, response.data);
    return api.sendMessage("•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n★𝙈𝘾𝙎-𝙍𝙊𝘽𝙊𝙏-𝙄𝙎-𝘽𝙆★\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•", event.threadID, () => api.sendMessage({body:`★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n★আসসালামুআলাইকুম-কেমন-আছেন-সবাই★\n
★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n
◄▒▓██▰▱▰▱𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳▰▱▰▱██▓▒►\n\n
★বট সংযুক্ত গ্রুপ চ্যাটে সফলভাবে যোগ করা হচ্ছে★\n
★কিরে বাঁদর গুলা শয়তানি করার জন্য অ্যাড দিছস★
⫷⫷━━━━━━━━━━━━━━━━━━━━━━━━━━━━⫸⫸\n\nযেকোনো কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন\n
\n\n╔═══════☆♡☆═══════╗\n\n╰┈➤উদাহারণ➤\n\n╰┈➤${global.config.PREFIX}inf ➤ \n╰┈➤${global.config.PREFIX}admin ➤ \n╰┈➤${global.config.PREFIX}owner ➤ \n╰┈➤${global.config.PREFIX}help ➤\n\n┗━━━━ ✦❘༻༺❘✦ ━━━━━┛
⫷⫷━━━━━━━━━━━━━━━━━━━━━━━━━━━━⫸⫸\n\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n
★যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার★\n★বস ✰𝐑𝐚𝐣𝐚_𝐁𝐚𝐛𝐮★ কে নক করতে পারেন★\n\n\n╰┈➤𝙂𝙈𝘼𝙄𝙇: badolbot007gmail.\n\n╰┈➤ 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆: https://www.facebook.com/RAJA.BABU.TERA.REAL.ABBU.OK.07\n\n╰┈➤𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍: m.me/100007070042228\n\n\★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n◄▒▓██▰▱▰▱𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳▰▱▰▱██▓▒►`, attachment: fs.createReadStream(gifPath)}, threadID));
})
.catch(error => {
    console.error(error);
});
  }
  else {
    try {
      if (!fs.existsSync(__dirname + `/Nayan/font/Semi.ttf`)) {
        let getfont = (await axios.get(fontlink, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/Nayan/font/Semi.ttf`, Buffer.from(getfont, "utf-8"));
      };
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for (let o = 0; o < event.logMessageData.addedParticipants.length; o++) {
        let pathImg = __dirname + `/Nayan/join/${o}.png`;
        let pathAva = __dirname + `/Nayan/join/avt.png`;
        let avtAnime = (await axios.get(encodeURI(
          `https://graph.facebook.com/${event.logMessageData.addedParticipants[o].userFbId}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), { responseType: "arraybuffer" })).data;
        var ok = [
          'https://i.imgur.com/dDSh0wc.jpeg',
          'https://i.imgur.com/UucSRWJ.jpeg',
          'https://i.imgur.com/OYzHKNE.jpeg',
          'https://i.imgur.com/V5L9dPi.jpeg',
          'https://i.imgur.com/M7HEAMA.jpeg'
        ]
        let background = (await axios.get(encodeURI(`${ok[Math.floor(Math.random() * ok.length)]}`), { responseType: "arraybuffer", })).data;
        fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
        fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
        var avatar = await this.circle(pathAva);
        let baseImage = await loadImage(pathImg);
        let baseAva = await loadImage(avatar);
        registerFont(__dirname + `/Nayan/font/Semi.ttf`, {
          family: "Semi"
        });
        let canvas = createCanvas(1902, 1082);
        console.log(canvas.width, canvas.height)
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAva, canvas.width / 2 - 188, canvas.height / 2 - 375, 375, 355);
        ctx.fillStyle = "#FFF";
        ctx.textAlign = "center";
        ctx.font = `155px Semi`;
        ctx.fillText(`${event.logMessageData.addedParticipants[o].fullName}`, canvas.width / 2 + 20, canvas.height / 2 + 100);
        ctx.save();
        ctx.font = `75px Semi`;
        ctx.fillText(`Welcome to ${threadName}`, canvas.width / 2 - 15, canvas.height / 2 + 235)
        const number = participantIDs.length - o;

        if (number === 11 || number === 12 || number === 13) {
          suffix = "th";
        } else {
          const lastDigit = number % 10;
          switch (lastDigit) {
            case 1:
              suffix = "st";
              break;
            case 2:
              suffix = "nd";
              break;
            case 3:
              suffix = "rd";
              break;
            default:
              suffix = "th";
              break;
          }
        }

        ctx.fillText(`You are the ${number}${suffix} member of this group`, canvas.width / 2 - 15, canvas.height / 2 + 350);
        ctx.restore();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        abx.push(fs.createReadStream(__dirname + `/Nayan/join/${o}.png`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = `•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ╰┈➤W⃠E⃠L⃠L⃠ C⃠O⃠M⃠E⃠➤\n\n                 ╰┈➤𝐍𝐄𝐖➤\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             ╰┈➤ {name} ➤\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🌺🌿🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🌿\n\n         🌿_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🌿\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n╔═━────━▒•✠•❀•✠• ▒━────━═╗\n╰┈➤𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑➤\n\n            ☟                     \n\n✰𝙎𝘼𝙉𝙑𝙄 𝘽𝙊𝙎𝙎★\n┗━━━━ ✦❘༻•✠•❀•✠•༺❘✦ ━━━━━┛\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n★𝗠 𝗖 𝗦★𝗕 𝗢 𝗧★𝟬 𝟬 𝟳★\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\nগুপে আসার জন্য তোমাকে অন্তরের অন্তর স্থল থেকে জানাই অবিরাম ভালবাসা!!-\n🖤🌻🥀🖤━━╬٨♪❤٨ـﮩﮩـ╬━❤️❥\n⭕⭕হা্ঁসি্ঁ ম্ঁজা্ঁ ঠা্ঁট্টা্ঁয়্ঁ ব্ঁন্ধু্ঁত্ব্ঁ হ্ঁবে্ঁ চি্ঁর্ঁকা্ঁলী্ঁন্ঁ বে্ঁচে্ঁ থা্ঁকু্ঁক্ঁ ব্ঁন্ধু্ঁত্ব্ঁ\nভা্ঁলো্ঁবা্ঁসা্ঁর্ঁ স্ঁম্প্ঁর্কে্ঁ আ্ঁজী্ঁব্ঁন্ঁ⭕⭕❉্᭄͜͡...\n▓▓▓▓▓▓▓▓\n\nআমাদের সাথে সময় দেওয়া ও পাশে থাকার অনুরোধ রইলো !!-🍂🌺🥀\n\n🦋༎❤❤༎\n\nⵗⵗ̥̥̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̥ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̊̊ \n\n🦋║ლ💞 💞 ლ║🦋\n\n💐☘️-ধন্যবাদ প্রিয়-☘️💐\n𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽.𝗕𝗢𝗧-𝗢𝗪𝗡𝗘𝗥♥🖤𝙎𝘼𝙉𝙑𝙄 𝘽𝙊𝙎𝙎❤️⃪⃝⃘᭄⃕❤️"\n─────────────────\n[ {time} - {thu} ]` : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'You' : 'You')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time)
        .replace(/\{thu}/g, thu);

      var formPush = { body: msg, attachment: abx, mentions }
      api.sendMessage(formPush, threadID);
      for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/Nayan/join/${ii}.png`)
      }
    } catch (e) { return console.log(e) };
  }
}
