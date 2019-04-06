const fs = require('fs');
const path = require('path');

if(!fs.existsSync(path.join(__dirname,'test')))
{
    fs.mkdir(path.join(__dirname,'test'),{},function(err){ 
        if (err) throw err;
        console.log('Folder created ...');
    });
}
else
{
    console.log('Folder existed ...');
}

fs.writeFile(path.join(__dirname,'test','conntent.txt'),
    'Hello guydydytfufifuckg',
    err => {
        if(err) throw err;
        console.log('File create and written to ...');
    }
);

// fs.appendFile(path.join(__dirname,'test','conntent.txt'),
// 'Hello guydydytfufifuckg \n ABCDEFGHIJKLMNOP',
// err => {
//     if(err) throw err;
//     console.log('File append ...');
// }
// );

fs.readFile(path.join(__dirname,'test','conntent.txt'),
    'utf8',
    (err,data) => {
        if(err) throw err;
        console.log(data);
    }
);

// fs.rename(path.join(__dirname,'test','conntent.txt'),
//     path.join(__dirname,'test','data.txt'),
//     (err) => {
//         if(err) throw err;
//         console.log('File renamed ...');
//     }
// );

