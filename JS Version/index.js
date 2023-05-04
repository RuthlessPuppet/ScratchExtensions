//https://github.com/PasinduDushan/Discord-Gateway-Example/blob/main/index.js

const url = 'wss://gateway.discord.gg'
const gateway = new WebSocket()
token = ''
const ID_Packet = {
        "op": 2,
        "d": {
          "token": token,
          "properties": {
            "os": "linux",
            "browser": "disco",
            "device": "disco"
          },
          "compress": true,
          "large_threshold": 250,
          "presence": {
            "activities": [{
              "name": "Working on scratch",
              "type": 0
            }],
            "status": "dnd",
            "since": 91879201,
            "afk": false
          },
          // This intent represents 1 << 0 for GUILDS, 1 << 1 for GUILD_MEMBERS, and 1 << 2 for GUILD_BANS
          // This connection will only receive the events defined in those three intents
          "intents": 7
        }
}



gateway.on(open = (event) => {
    gateway.send(JSON.stringify(ID_Packet));
})

gateway.on('message', (event) => {

})





const heartbeat = (ms) => {
    return setInterval(() => {
        gateway.send(JSON.stringify({op: 1, d: null}))
    }, ms)
}