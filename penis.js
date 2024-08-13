let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Dika ID',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: dikatech.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ By Dika ID ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝗗𝗶𝗸𝗮𝗚𝗮𝗻𝘁𝗲𝗻𝗴\ndika lu itu ganteng banget jir sumpah 🥰😘😘\",\"id\":\".dikaganteng\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

dikatech.relayMessage(m.chat, msg, {});

> let target = m.chat

async function pnis() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By Dika ID',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: dikatech.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ By Dika ID ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"𝗗𝗶𝗸𝗮𝗚𝗮𝗻𝘁𝗲𝗻𝗴\ndika lu itu ganteng banget jir sumpah 🥰😘😘\",\"id\":\".dikaganteng\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}), { userJid: target, quoted: m })
await dikatech.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

pnis()