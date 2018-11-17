module.exports = {
  telegram: {
    botToken: "bot_token",
    proxy: {
      enable: false,
      socks5: {
        host: "u0k12.tgproxy.me",
        port: "1080",
        username: "telegram",
        password: "telegram"
      }
    },
    channelId: "telegram_channel_id"
  },
  vk: {
    groupId: "vk_group_id",
    groupKey: "vk_group_key"
  },
  postTags: ["&#13;", /\[.+\|.+\]/],
  removeTags: true
};