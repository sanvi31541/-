/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "BADOL-KHAN",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•—»✨「𝙈 𝘾 𝙎」✨«—•\n༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n᭄࿐-ইচ্ছে!!!গুলো!!!যদি!!!পবিত্র!!হয়!✿᭄\n\n✿᭄তাহলে!!!স্বপ্ন!!! গুলো..🖤🥀\n\n✿᭄ ࿐- একদিন!!!পূরণ!!!হবেই!!! ✿᭄\n\n✿᭄࿐ইনশাআল্লাহ..🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
" •—»✨「𝙈 𝘾 𝙎」✨«—•\n ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐ \n╭•┄┅════❁🌺❁════┅┄•╮\n\n_____✵♡︎\n\n___কি  হবে  এত  মানুষের প্রিয় হয়ে__🦋🌻\n\n__যদি আল্লাহ   প্রিয় না হতে পারি__🙂🦋\n\n_____✵♡︎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"___•—»✨「𝙈𝙪𝙨𝙡𝙞𝙢 𝘾𝙮𝙗𝙚𝙧」  ✨«—•\n ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ Program༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n┏╮/╱╰️❥☆••\n╱/╰┛🍁࿐চিরস্থায়ী কি \nজানেন͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌༒࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n༄আপনার সুন্দর ব্যবহার!!🍁!!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌🍁যেটা মৃত্যুর পরও সবার সৃতিতে থাকবে🥰❁ཻ͜͡ღ᭄\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋\n\n-মক্কা তুমি ধন্য.༏༏😽🕋࿐\n\n-তোমার বুকে হয়েছিলো বিশ্ব নবীর জন্ম.༏༏࿐💛🙆\n\n🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n●══❥𝄞⋆⃝🥰 ভাগ্যর ༅༎༅ উপর ༅༎༅ কারো ༅༎༅ হাত নেই !!💚🌺🥀\n\n────😕\n🦋🌺-༅༎༅ সব ༅ ༎༅ কিছু ༅༎༅ পরিবর্তন ლ🌼\n༅༎༅ করার  মালিক  🌻😽💖\n\n🕊༎༅ একমাত্র ༅༎༅ আল্লাহ \n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\nwish 🤗\n\nমৃত্যুর কয়েক সেকেন্ড আগে যেন প্রত্যেকটা\nমুসলমানের মুখে\nউচ্চারিত হয় !\nলা ইলাহা ইল্লাল্লাহু\n মুহাম্মাদুর রাসূলুল্লাহ ( সঃ )\n\nআমিন🤲🤲🥰\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n ༅༎❥~🦋\n\n༅༎❥━-কালি ছাড়া যেমন কলম 🖊️\nমূল্যহীন🗑️\n\nতেমনি নামাজ ছাড়া মুসলিম মূল্যহীন!!❥༅༎\n\n🖤~🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n°\n\n—𝐒𝐮𝐩𝐞𝐫𝐦𝐚𝐧 𝐎𝐟 𝐓𝐡𝐞 𝐖𝐨𝐫𝐥𝐝—\n—হযরত মুহাম্মদ (সা:)💚🌼\n\n°\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",

"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋࿐\n\nহীরার চেয়েও দামি\nহযরত মুহাম্মদ (সাঃ) এর মুখের বাণী🫰🖤\n\n🦋࿐\nসুবহানাল্লাহ-🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝙎𝘼𝙉𝙑𝙄☻𝘽𝙊𝙏 ☻ ⓿⓿➐ ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🥀\n- প্রতিশোধ নয়.!🙂💌\n- হ্মমা করাই ইসলামের আদর্শ.!❤️🥰\n\n- হযরত মোহাম্মদ (সাঃ)😍🤎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙎𝘼𝙉𝙑𝙄☻ 𝘽𝙊𝙎𝙎★" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/ZR0SLZyy/received-104854222681538.jpg",
"https://i.postimg.cc/CM3RdrW4/received-1077131053254543.jpg",
"https://i.postimg.cc/mhWWRHpQ/received-1202913210365646.jpg",
"https://i.postimg.cc/yxZCwPj1/received-179416495132916.jpg",
"https://i.postimg.cc/8kJFpgn5/received-201956602842877.jpg",
"https://i.postimg.cc/8c2N53cf/received-2183981171798286.jpg",
"https://i.postimg.cc/6QWwyCWc/received-259795433354586.jpg",
"https://i.postimg.cc/JzWRC9S9/received-317063074088232.jpg",
"https://i.postimg.cc/5tsJvjjV/received-583147497311518.jpg",
"https://i.postimg.cc/7ZMwHKkb/received-598373762409967.jpg",
"https://i.postimg.cc/wTD7NczY/received-649778976784401.jpg",
"https://i.postimg.cc/DZDKjDqp/received-659497149400143.jpg",
"https://i.postimg.cc/WpC2XD8p/received-659559285696847.jpg",
"https://i.postimg.cc/4NcXMJ26/received-819496329472643.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
