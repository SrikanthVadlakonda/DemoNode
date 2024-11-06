const os=require('os')
const path= require('path')
const fs = require('fs')

//OS module
//console.log(os.type())
//console.log(os.version())
//console.log(os.freemem())
//console.log(os.cpus())
//console.log(__dirname)
//console.log(__filename)

//path module
//console.log(path.dirname(__filename))
//console.log(path.basename(__filename))
//console.log(path.extname(__filename))
//console.log(path.parse(__filename))

//fs module
//const fs=require('fs')
//fs.readFile("demo.txt", 'utf8',(err,data)=>{
  //  if(err){
    //    console.log(err)
    //}
    //console.log(data)
//})
//fs.writeFile('example.html','utf8',(err)=>{
  //  if(err){
    //    console.log(err)
    //}
    //console.log('file created successfully')
//})

//const contentSample ="My name is srikanth, I am Creating a Dynamic Content"
//fs.writeFile('example.html', contentSample, (err)=>{
   // if(err){
     //   console.log(err)
    //}else{
      //  console.log("File content is success")
    //}
//})

//fs.rename('example.html', "newChangedFile.html", (err)=>{
if(err){
    console.log(err)
}else{
    console.log("File renamed successsfully")
}
//})

//delete
//fs.unlink('newChangedFile.html',(err)=>{
  //  if (err){
        console.error('error deleting file:', err)
   // }else{
     //   console.log('file deleted successfully')
    //}
//})