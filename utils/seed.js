const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {getRandomName, loremIp} = require('./data');

// console.log(getRandomName());
// console.log(loremIp.generateSentences(1))
const addThought = async (user)=> {
  const thought = await Thought.create({
    thoughtText: loremIp.generateSentences(1),
    username: user.username
  })
  // return await Thought.collection.insertOne(thought)
  return thought
}

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0] + `${Math.floor(Math.random()* (100))}`;
    const email = fullName.split(" ")[1] + `${Math.floor(Math.random()* (100))}` + '@gmail.com' 
    const user = await User.create({
      username: first,
      email: email, 
      thoughts: [],
      friends: []
    })
    const thought = await addThought(user)
    user.thoughts.push(thought._id)
    user.save()
    console.log(thought)
    users.push(user);
  }
  for (let user of users){
    let numFriends = Math.floor(Math.random()* 15 + 5)
    for (let i = 0; i < numFriends; i ++){
      let randFriendIdx = Math.floor(Math.random() * users.length)
      let friend = users[randFriendIdx]
      if(friend._id === user._id){
        randFriendIdx = randFriendIdx + 1
        if (randFriendIdx >= users.length) {
          randFriendIdx = randFriendIdx - 2
        }
        friend = users[randFriendIdx]
      }         
      user.friends.push(friend._id)
    }
    user.save()
  }

  process.exit(0);

});
