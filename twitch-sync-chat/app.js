const tmi = require("tmi.js");

var cf = {
  'auth': {
    'username': 'your_username',
    'password': 'your_oauth_token'
  },
  'channel': [
    'channel1',
    'channel2',
    'channel3'
  ]
};

console.log('Everything should be started in ~' + Number(cf.channel.length * 2 + 5) + ' seconds.');

var client = new tmi.client({
    identity: cf.auth,
    channels: cf.channel
});
client.connect();

client.on("chat", (channel, user, message, self) => {
  if(user.username == cf.auth.username && !self){
    cf.channel.forEach(f);
    function f(ch){
      if(ch !== channel){
        client.say(ch, message);
      }
    };
  }
});
