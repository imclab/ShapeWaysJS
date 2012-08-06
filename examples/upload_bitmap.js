var shapeways = require('../index.js')
  , path = require('path');

if(process.argv.length !== 4) {
  console.log("Please specify your [username] and [password] as commandline arguments.");
  process.exit(1);
}

shapeways.connect({
    username:  process.argv[2]
  , password:  process.argv[3]
}, function(err, sw) {

  if(err) {
    console.log(err);
    return;
  }
  
  sw.upload({
      title: 'Test Bitmap Cube'
    , units: 'cm'
    , model_json: {
        tex_coords: [
              [0, 0]
            , [1, 0]
            , [0, 1]
            , [1, 1]
            , [0, 0]
            , [1, 0]
            , [0, 1]
            , [1, 1]
        ]
      , verts: [ 
              [0, 0, 0]
            , [1, 0, 0]
            , [0, 1, 0]
            , [1, 1, 0]
            , [0, 0, 1]
            , [1, 0, 1]
            , [0, 1, 1]
            , [1, 1, 1] 
        ]
      , faces: [
              [0, 1, 3, 2]
            , [0, 1, 5, 4]
            , [0, 2, 6, 4]
            , [1, 3, 7, 5]
            , [2, 3, 7, 6]
            , [4, 5, 7, 6] 
        ]
    }
    , texture_bitmap: [
        1, 1, 1,      0, 0, 0, 
        0, 0, 0,      1, 1, 1
      ]
    , texture_width:  2
    , texture_height: 2 
  }, function(err, model_id) {
    if(err) {
      console.log("Failed to upload JSON:", err);
      return;
    }
    console.log("Uploaded model: " + model_id);
  });
});
