window.Controls = function(charset) {
  var controlsURL = config.serverURL+"controls/"
  $(window).keypress(function(e) {
      console.log(e.which);
      switch (e.which) {
          case 119:
              Requests.post(controlsURL+"moveup.json",{x:charset.getPositionX(), y:charset.getPositionY()},function(data){
                  console.log(data)
                  if(data.allow){
                      charset.moveUp();
                      console.log('moveup')
                  }
              });
              break;
          case 115:
              Requests.post(controlsURL+"movedown.json",{x:charset.getPositionX(), y:charset.getPositionY()},function(data){
                  if(data.allow){
                      charset.moveDown();
                      console.log('movedown')
                  }
              });
              break;
          case 97:
              Requests.post(controlsURL+"moveleft.json",{x:charset.getPositionX(), y:charset.getPositionY()},function(data){
                  if(data.allow){
                      charset.moveLeft();
                      console.log('moveleft')
                  }
              });
              break;
          case 100:
              Requests.post(controlsURL+"moveright.json",{x:charset.getPositionX(), y:charset.getPositionY()},function(data){
                  if(data.allow){
                      charset.moveRight();
                      console.log('moveright')
                  }
              });
              break;
          case 13:
              Requests.post(controlsURL+"gotitem.json",{x:0,y:0},function(data){
                  if(data.allow){
                      // charset.gotItem();
                      console.log('gotItem')
                  }
              });
              break;
      }
  });
};
