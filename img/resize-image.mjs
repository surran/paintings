import resizer from 'node-image-resizer';
import fs from 'fs';
 
  var path = './'

const setup = { 
  all: {
    path: path,
    quality: 80
  },
  versions: [{
    prefix: 'web_',
    width: 714
    //width: 352,
  }]
};
 
// create thumbnails

  //await resizer('./ranjan.jpg', setup);
  //await resizer('./book2017.JPG', setup);
  resizer('./utsav1.png', setup);
  //await resizer('./posters/', setup);
  
/*

  fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        //console.log(items[i]);
     resizer(path + items[i] , setup);
    }
  });

  node --experimental-modules resize-image.mjs
*/
