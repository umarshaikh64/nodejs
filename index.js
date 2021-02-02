const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const gTTS = require('gtts')
const child_process = require('child_process');
const exec = child_process.exec;
const PORT = 8080;
const pdf = require('pdf-parse');
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
const path = require("path");
const addzip= require("adm-zip");

app.get('/',(req,res)=>{
   res.send({res:"umar"});
});

const convertDocument = async (input, output) => {
return new Promise((resolve, reject) => {
exec(`ebook-convert ${input} ${output}`,
(error, stdout) => {
if (error !== null) {
reject(error);
}
else {
resolve(stdout);
}
});
});
};




const promises = [];
const testFolder = 'doc/';

app.post('/store',(req,res)=>{
const type = req.body.type;
const ty = req.body.fil
const writ = req.body.mni;
const fi = `${Math.random()*2}.${type}`;
var read = Buffer.from(ty,'base64');
 fs.writeFileSync(`uplode/${writ}`,`${read}`,'utf8');
if (`uplode/${writ}`!==null) {
  convertDocument(`uplode/${writ}`,`doc/${fi}`);
promises.push(fi);
console.log(promises);
}
});

// const ft=[];
// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//  ft.push(file)
//  console.log(file)
//   });
// });

app.post('/converttv', function (req, res) {
    const txt = req.body.txt;
    const tyy = req.body.tyy;
    var datetime = new Date();
    const lung = req.body.lung
    const gtts = new gTTS(txt,"en-us");
     gtts.save(`doc/${Math.random()}.${tyy}`||`doc/${datetime}.${tyy}` ,(err,result)=>{
     })
  
 });
//  const da = `doc/${Math.random()}.epub`;
// app.get('/ci',(req,res)=>{
//   convertDocument(``,da).then(function (data) {
//     res.send(data.output)
//   });
 
// })
const convsrtPdf=`doc/${Math.random()}.pdf`;
  app.post('/pdftomp3',(req,res)=>{
//     if(da!==null){
//     let dataBuffer = fs.readFileSync(da);
// pdf(dataBuffer).then(function(data) {
// const txt = null;
//  if(txt===null){
//   var gtts = new gTTS(data.text, 'en');
//   gtts.save('doc/umareg.mp3', function (err, result) {
//     if(err) { throw new Error(err) }
//     res.send('uame')
//     console.log('Success! Open file /tmp/hello.mp3 to hear result.');
//   });
//  }
//  res.send('uame');
// });
//     }
const ty = req.body.fil
const writ = req.body.mni;
var read = Buffer.from(ty,'base64');
  fs.writeFileSync(`uplode/${writ}`,read,'utf8');
fs.readdir(testFolder,(err,files)=>{
  files.forEach(file=>{
  const file1  = `uop/${file}`;
 console.log(file1)

 convertDocument(`${file1}`,`${convsrtPdf}`).then(data=>{

  if(data !== null){
    let dataBuffer = fs.readFileSync(convsrtPdf);
pdf(dataBuffer).then(function(data) {
const txt = null;
 if(txt===null){
  var gtts = new gTTS(data.text, 'en');
  gtts.save(`doc/${Math.random()}.mp3`, function (err, result) {
    if(err) { throw new Error(err) }
    res.download(`doc/${Math.random()}.mp3`);
    console.log('Success! Open file /tmp/hello.mp3 to hear result.');
  });
 }
 
});
  }
 })
  })
})

  })



const aipDir= fs.readdirSync(`${__dirname}/doc`);
app.post('/addzip',(req,res)=>{
  const files = req.body.files;
  const types= req.body.types;
const zip = new addzip();
for (let i = 0; i < aipDir.length; i++) {
  zip.addLocalFile(`${__dirname}/doc/${aipDir[i]}`)
  
}
const zipfile  = `doc/${Math.random()}.zip`
zip.writeZip(`${__dirname}/${zipfile}`);

});

 
 app.use('/file',express.static('/doc'));

app.get('/download', function(req, res){
   fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {

 const file1 = `${__dirname}/doc/${file}`;
 res.download(`${file1}`)

  console.log("downloaded")

//  fs.unlinkSync(file1)
  });
  
});

});

// setInterval(function () {
//   fs.readdir(testFolder,(err,files)=>{
//     files.forEach(file=>{
//       const file1 = `${__dirname}/doc/${file}`;
//       fs.unlinkSync(file1);
      
//     })
//   })
// },90000)
const uop = `uplode`;
app.get('/complete',(req,res)=>[
  fs.readdir(testFolder,(err,files)=>{
    files.forEach(file=>{
      const file1 = `${__dirname}/doc/${file}`;
      fs.unlinkSync(file1);
      
    })
  }),
  fs.readdir(uop,(err,files)=>{
    files.forEach(file=>{
      const file1 = `${__dirname}/uplode/${file}`;
      fs.unlinkSync(file1);
      
    })
  })
])

app.listen(PORT,(req,res)=>{
console.log('server http://localhost:'+PORT);
});

