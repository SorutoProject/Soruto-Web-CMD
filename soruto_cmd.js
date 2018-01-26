/*
*Soruto Cmd Source code(Ver.1.0)
*This is built with Soruto EJB.
*So, you have to write script tag for loading the Soruto EJB lib. on your page.
*/
window.onload = function(){
	So_foc("ut");
	So_divIHT("res","Welcome!!<br>");
	
}
function run(){
  var uc = So_getVal("ut").split(" ");
  var xhr = new XMLHttpRequest();
  xhr.open('GET',"com/" + uc[0] + ".txt", true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
     var csv = xhr.responseText;
	 if(csv == "404 Error"){}else{check(csv,uc);}//404 check
    }
    if (xhr.readyState === 4 && xhr.status === 0){
      var csv = xhr.responseText;
	  if(csv == "404 Error"){}else{check(csv,uc);}//404 check
    }
  };
  xhr.send(null);
};
function check(csv,uc){
	var ch = csv.split("*").join(uc[1]);
	var vals = ch.split(" ");
	if(vals[0] == "echo"){So_divIHT(vals[1]);}
	else{So_divIHT("res","Error:\""+uc[0]+"\" そのようなコマンドは存在しません<br>");}
}