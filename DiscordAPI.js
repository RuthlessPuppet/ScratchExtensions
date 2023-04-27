class ScratchDiscord {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "discord",
            "name": "Discord API",
            "blocks": [
                        {
                            "opcode": "login",
                            "blockType": "reporter",
                            "text": "login to api using token [token]",
                            "arguments": {
                                "token": {
                                    "type": "string",
                                    "defaultValue": ""
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "extract [name] from [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "temperature"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": '{"temperature": 12.3}'
                                },
                            }
                        },
                ],
        };
    }
    
    login({token}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new ScratchDiscord())