import resizer from 'node-image-resizer';
import fs from 'fs';
 
  var path = './pom/'
  var path = ''
  var path = './posters/'
  var path = './17Paintings/'
  var path = './associations/'

const setup = { 
  all: {
    path: path,
    quality: 80
  },
  versions: [{
    prefix: 'postcard_',
    width: 1200
    //width: 352,
  }]
};
 
// create thumbnails

  //await resizer('./ranjan.jpg', setup);
  //await resizer('./book2017.JPG', setup);
  //resizer('./utsav1.png', setup);
  //await resizer('./posters/', setup);
  


  fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        //console.log(items[i]);
     resizer(path + items[i] , setup);
    }
  });


