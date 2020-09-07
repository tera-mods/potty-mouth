// <3 Pinkie Pie :3

module.exports = function PottyMouth(mod) {
	for(let pkt of [
		['C_CHAT', 1],
		['C_WHISPER', 1],
		['S_CHAT', 3],
		['S_WHISPER', 3],
		['S_PRIVATE_CHAT', 1]
	])
		mod.hook(...pkt, { order: 20 }, unfilter)
}

function unfilter(event) {
	event.message = event.message.replace(/<font>(.+?)<\/font>/gi, '<font></font>$1')
	return true
}