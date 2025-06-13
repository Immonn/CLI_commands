const fs=require('fs')
const {Command}=require ("commander")
const program=new Command()

program
    .name("Counter")
    .description("CLI TO PRint count of line")
    .version('0.5.0')

program.command('count')
    .description("GIve the number of lines in files")
    .argument("<file>","file to count")
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if (err){
                console.log(err)
            }
            else{
                const lines=data.split('\n').length
                console.log(`There are ${lines} in ${file}`)
            }
        })
    })
program.parse()