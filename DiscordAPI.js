//scratch vm is declared, as some functions can use it to their advantage
//For example, blocks that access scratch variables such as lists use the vm
//Block type can be reporter, Boolean, hat, or command
//You can code blocks to do javascript functions
//The blocks/menu img can be set using a data uri in the get info function, see below
/*
  "blockIconURI": blockIcon,
  "menuIconURI": menuIcon,
*/
//For drop down menu when declaring a variable put the type of input and then menu: 'insert menu name here'
//After declaring the blocks declare the menu like this:
/*
     menus: {
          menuNameHere: {
            acceptReporters: true,
            items: [
              {
                text: 'Item(1)',
                value: '1'
              },
              {
                text: 'Item(2)',
                value: '2'
              }
            ]
          }
        }
*/


//My goal is to implement the discord api into scratch

//https://discord.com/developers/docs/topics/gateway


    const vm = Scratch.vm

    const blockLogo = 'data:image/png;base64,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'


    class ScratchDiscord {
        constructor() {}
    
        getInfo() {
            return {
                "id": "discord",
                "name": "Discord API",
                "menuIconURI": blockLogo,
                "blocks": [
                            {
                                "opcode": "login",
                                "blockType": "command",
                                "text": "Login to api using token: [token]",
                                "arguments": {
                                    "token": {
                                        "type": "string",
                                        "defaultValue": ""
                                            },
                                        }
                            },
                            {
                                "opcode" : "reply",
                                "blockType" : "command",
                                "text" : "Reply to message [object] with message: [message]",
                                "arguments": {
                                  "object" : {
                                      "type": "string",
                                      "defaultValue": ""
                                            },
                                    "message" : {
                                      "type":"string",
                                      "defaultValue":"Hello World!"
                                    }
                                }
                            }
                        ],
                    };
                }
    
        login({token}) 
        {
            
        }

        reply({object, message})
        {
          
        }
    }



Scratch.extensions.register(new ScratchDiscord())