function show() {

  var inputName = document.getElementById("nomeEntrada").value;
  var outputName = document.getElementById("nomeSaida");
  if (document.getElementById("nomeEntrada").value == null){
    outputName.innerHTML = "usuário";
  }else{
    outputName.innerHTML = inputName;
  }

  var anwser1 = document.getElementById("s1");
  var anwser2 = document.getElementById("n1");
  if (anwser1.checked == true){
    document.getElementById('wrong1').innerHTML = ('Errou!');
    document.getElementById('correct1').innerHTML = ('');
  }else{
    document.getElementById('correct1').innerHTML = ('Acertou!');
    document.getElementById('wrong1').innerHTML = ('');
  }

  var anwser3 = document.getElementById("s2");
  var anwser4 = document.getElementById("n2");
  if (anwser3.checked == true){
    document.getElementById('correct2').innerHTML = ('Acertou!');
    document.getElementById('wrong2').innerHTML = ('');
  }else{
    document.getElementById('wrong2').innerHTML = ('Errou!');
    document.getElementById('correct2').innerHTML = ('');
  }

  var anwser5 = document.getElementById("s3").value;
  var anwser6 = document.getElementById("n3").value;
  if (anwser5.checked == true){
    document.getElementById('correct3').innerHTML = ('Acertou!');
    document.getElementById('wrong3').innerHTML = ('');
  }else{
    document.getElementById('wrong3').innerHTML = ('Errou!');
    document.getElementById('correct3').innerHTML = ('');
  }

function

}
