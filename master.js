const childProcess = require('child_process');

const one = childProcess.fork('child1.js');
const two = childProcess.fork('child2.js');
const three = childProcess.fork('child3.js');

one.send(' ---> send from one to child1, from master <---')
two.send('---> send from one to child2, from master <---')
three.send('---> send from one to child3, from master <---')

one.on('message', data => {
    console.log(`get ${data} from one`)
})

two.on('message', data => {
    console.log(`get ${data} from two`)
})

three.on('message', data => {
    console.log(`get ${data} from three`)
})