process.on('message', data => {
    console.log(`get ${data} from master in child 3`)
    process.send(` ---> from child3 <---`)
});