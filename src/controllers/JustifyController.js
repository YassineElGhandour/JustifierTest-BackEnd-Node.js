

function countLines(s) {
    return s.split("\n").length - 1;
}

function injectSpaces(t, spaces) {

	for (let i=0; i<t.length; i++){
		if (spaces > 0){
			t[i]  = " " + t[i];
			spaces--;	
		}
		else {
			break;
		}			
  }
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
        line = [];
        line.push(mots[i]);
      }
    }
    output += arrayToLine(line);
    return output
  }




module.exports = {

	justify(req, res){
		try {
			const input = req.body
			const output = justif(input)
			res.send(output
			)
			
		}
		catch(err) {
			res.status(500).send({
				error: 'POST : 500 internal Error'
			})
		}
	}

}