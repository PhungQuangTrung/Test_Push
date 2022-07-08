module.exports.config = {
	name: "donate",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Văn Huy",
	description: "Donate Cho Admin",
	commandCategory: "Donate Cho Admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Bạn có thể donate cho Admin Qua\nMomo:0984073847\nMb bank: 9999914052007\nXin cảm ơn bạn đã donate`, event.threadID, event.messageID);