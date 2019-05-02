
var resizer = require('node-image-resizer');

const setup = { 
  all: {
    path: '',
    quality: 80
  },
  versions: [{
    prefix: 'web_',
    width: 714
  }]
};
 
// create thumbnails
const thumbs = await resizer('./ranjan.jpg', setup);