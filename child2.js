process.on('message', data => {
    console.log(`get ${data} from master in child 2`)
    process.send(` ---> from child2 <---`)
});