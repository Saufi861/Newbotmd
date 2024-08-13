// JIKA INGIN RENAME HARAP HATI HATI JANGAN HAPUS TANDA ' AGAR TIDAK ERROR!! t.me/dikabot_tech

//===========================//
const fs = require('fs')
//===========================//
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//===========================//
global.d = new Date()
global.calender = d.toLocaleDateString('id')
//===========================//
global.apikey = 'isi ptla' //ganti apikey ptla
global.capikey = 'isi ptlc' //ganti apikey ptlc
global.domain = 'link panel lu' //ganti domain link panel lu
global.eggsnya = '15' //ganti eggs panel lu
global.location = '1' //ganti location panel lu
//===========================//
global.prefa = ['','!','.',',','🐤','🗿'] //gosah di otak atik
global.owner = ['48699524825'] //nomor lu
global.ownMain = '48699524825' //nomor lu
global.NamaOwner = 'DikaID' //nama lu
global.sessionName = 'ryokunsession' //gosah di otak atik
global.connect = true // ubah ke false jika ingin menggunakan qr code
global.namabot = 'DikaMewing' //nama bot lu
global.author = 'DikaMewing' //ganti aja kalo mau
global.packname = 'DikaMewing' //ganti aja kalo mau
global.saluran = 'https://whatsapp.com/channel/0029VaegLveBKfhz5g2mlg1d' //sumber script (kalo bisa gosah di rename)

//===========================//
global.listr = ` │⬡ 1GB Cpu: 70% - 1.000/bln
 │⬡ 2GB Cpu: 90% - 2.000/bln
 │⬡ 3GB Cpu: 110% - 3.000/bln
 │⬡ 4GB Cpu: 130% - 4.000/bln
 │⬡ 5GB Cpu: 150% - 5.000/bln
 │⬡ 8GB Cpu: 170% - 6.000/bln
 │⬡ 7GB Cpu: 200% - 7.000/bln`
//===========================//
global.country = `62`
global.system = {
gmail: `clientdikaid@gmail.com`,
}


//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//











































































































// MINIMAL GOSAH HAPUS CREDIT DEKK!!!
// © DIKA ID

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//
global.mess = { // bagian ini gausah diganti 
 ingroup: 'This feature can only be used in groups.',
 admin: 'This feature is specifically for group admins.',
 owner: 'You are not the owner.',
 premium: 'You are not a premium user.',
 seller: 'This feature can only be used by resellers and owners.',
 usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid? 🤓`,
 wait: '*Waiting for processing 🗿🚬*',
 success: 'Success Bang 🗿🚬',
 bugrespon: `✅Processs.....🗿🚬`
}
//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

// </> CREATOR SCRIPT BY DIKA ID!! NOT RENAME SUMBER 😡