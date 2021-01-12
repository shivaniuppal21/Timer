const beep = function() {
    const { exec } = require("child_process");
    exec('paplay /usr/share/sounds/ubuntu/stereo/dialog-information.ogg');
  };
  
  beep();

  const arguments = process.argv;
  const arr = arguments.slice(2);
  const arr2 = arr.sort((a,b)) => {
      a-b;
  };
for (let i=0; i< arr2.length; i++){
    if(arr2.length === 0){
        return ""
    }else{
        if( arr2[i] > 0){
            setTimeout(() => {
                process.stdout.write("\x07");
            }, arr2[i]* 1000)
        }
    }
}