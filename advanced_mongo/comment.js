const fs = require('fs');
const { loadavg } = require('os');

const comments = require('./comments.json')

let updatedComments = comments.map(comment => {
  let name = comment.name
  let email = comment.email
  let user = {name, email}
  let body = comment.body

  return {
    user, 
    body
  }
})

console.log(updatedComments[0])

function storeGroup(updatedComments) {
  fs.writeFile('updatedComments.json', JSON.stringify(updatedComments), (err) => {
  if (err) {
    console.error("error occured writing json file");
  } else {
    console.log("Updated json file");
  }
});
}

storeGroup(updatedComments)