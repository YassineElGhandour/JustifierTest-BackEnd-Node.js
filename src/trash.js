function countLines(s) {
    return s.split("\n").length - 1;
}

function injectSpaces(t, spaces) {
    let index = 0;
    //var t = []
    while(spaces > 0) {
      t.splice(index, 0, t[index] + " ");
      t.join()
      index ++;
      spaces --;
    }
  }

function removeLineSeparators(s) {
    var res = "";
    var jhin = s.split("\n\n")
    jhin.forEach(function(elm){
        res += elm + "\n";
    })
    return res;
  }

function lenWithSpaces(t) {
    let res = 0;
    for (let i=0; i < t.length; i++) {
      res += t[i].length + 1;
    }
    return res ;
  }
  
function arrayToLine(t) {
    var res = t[0];
    for (let i=1; i<t.length; i++) {
      res += " " + t[i];
    }
    return res;
  }

function justif(input) {
    var mots = []
    var mots = input.split(" ");
    var output ="";
    var line = [];
    line.push(mots[0]);
    let spaces = 0;
    for (let i=1; i< mots.length; i++) {
      if (lenWithSpaces(line) + mots[i].length + 1 < 82) {
        line.push(mots[i]);
      }else {
        spaces = 80 - arrayToLine(line).length;
        injectSpaces(line, spaces);
        output += arrayToLine(line) + "\n";
        //line.clear();
        line.push(mots[i]);
      }
    }
    output += arrayToLine(line);
    output = removeLineSeparators(output);
    return output
  }
var strr = "" 
var easy = justif(strr)


console.log("Justified for dots: \n", easy)
