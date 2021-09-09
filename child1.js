process.on('message', data => {
    console.log(`get ${data} from master in child 1`)
    process.send(` ---> from child1 <---`)
});