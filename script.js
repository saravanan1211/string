
    
                  function add()
                  {
                    var num1 = Number(document.getElementById("txtNum1").value);
                    var num2 = Number(document.getElementById("txtNum2").value);
                    var sum = num1 + num2;
                    alert(sum);
                
                  }
                  function sub()
                  {
                    var num1 = Number(document.getElementById("txtNum1").value);
                    var num2 = Number(document.getElementById("txtNum2").value);
                    var sub = num1 - num2;
                    alert(sub);
                
                  }
                  function multiplication()
                  {
                    var num1 = Number(document.getElementById("txtNum1").value);
                    var num2 = Number(document.getElementById("txtNum2").value);
                    var multiplication = num1 * num2;
                    alert(multiplication);
                  }
                  function division()
                  {
                    var num1 = Number(document.getElementById("txtNum1").value);
                    var num2 = Number(document.getElementById("txtNum2").value);
                    var division = num1 / num2;
                    alert(division);
                    
                  }


                  function one(){
                    var a=document.getElementById("Num1").value;
                   document.getElementById("res").innerHTML=a.length;


                  }
                  function two(){
                    var a=document.getElementById("Num1").value
                    var b=document.getElementById("startval").value
                    document.getElementById("res").innerHTML=a.charAt(b)
                    

                  }
                  function three(){
                    var a=document.getElementById("Num1").value
                    var b=document.getElementById("startval").value
                    document.getElementById("res").innerHTML=a.charCodeAt(b)
                   

                  }
              
                  function four(){
                        var a=document.getElementById("Num1").value
                    var b=document.getElementById("startval").value
                    document.getElementById("res").innerHTML=a.at(b)
                   
                   

                  }
                  function five(){
                    var a=document.getElementById("Num1").value;
                    document.getElementById("res").innerHTML=a
                
                   

                  }
                  function six(){
                    var a=document.getElementById("Num1").value;
                   let startval=document.getElementById("startval").value;
                   let endval=document.getElementById("endval").value;
                   document.getElementById("res").innerHTML=(a.slice(Number(startval),(Number(endval))));
                  }
                  function seven(){
                    var a=document.getElementById("Num1").value;
                   let startval=document.getElementById("startval").value;
                   let endval=document.getElementById("endval").value;
                   document.getElementById("res").innerHTML=(a.substring(Number(startval),(Number(endval))));
                  }
                  function eight(){
                    var a=document.getElementById("Num1").value;
                    let startval=document.getElementById("startval").value;
                    let endval=document.getElementById("endval").value;
                    document.getElementById("res").innerHTML=(a.substr(Number(startval),(Number(endval))));

                  }
                  function nine(){
                    var a=document.getElementById("Num1").value;
                    document.getElementById("res").innerHTML=(a.toUpperCase());

                  }
                  function ten(){
                    var a=document.getElementById("Num1").value;
                    document.getElementById("res").innerHTML=(a.toLowerCase());

                  }
                  function eleven(){
                    let a=document.getElementById("startval").value;
                    let b=document.getElementById("endval").value;
                    document.getElementById("res").innerHTML=(a.concat(" ",b));

                  }
                  function twele(){
                    let startval=document.getElementById("startval").value;
                    let endval =  startval.trim();
                    document.getElementById("res").innerHTML =
"Length startval = " + startval.length + "<br>Length endval = " + endval.length;
               

                  }
                  function thirteen(){
                    let startval=document.getElementById("startval").value;
                    let endval =  startval.trimStart();
                    document.getElementById("res").innerHTML =
"Length startval = " + startval.length + "<br>Length endval = " + endval.length;
                  }
                  function fourteen(){
                    let startval=document.getElementById("startval").value;
                    let endval =  startval.trimEnd();
                    document.getElementById("res").innerHTML =
"Length startval = " + startval.length + "<br>Length endval = " + endval.length;
                  }
                  function fifteen(){
                    let startval=document.getElementById("startval").value;
                    let endval =  startval.padStart(8,"2");
                    document.getElementById("res").innerHTML =endval;

                  }
                  function sixteen(){
                    let startval=document.getElementById("startval").value;
                    let endval =  startval.padEnd(8,"2");
                    document.getElementById("res").innerHTML =endval;

                  }
                    
                    
                  function seventeen(){
                    var a=document.getElementById("Num1").value;
                    alert(a.repeat(2));

                  }
                  function eighteen(){
                    var a=document.getElementById("Num1").value;
                    var startval=document.getElementById("startval").value;
                    var endval=document.getElementById("endval").value;
                    document.getElementById("res").innerHTML = a.replace((startval),(endval));

                  }
                  function nineteen(){
                    var a=document.getElementById("Num1").value;
                    var startval=document.getElementById("startval").value;
                    var endval=document.getElementById("endval").value;
                    document.getElementById("res").innerHTML = a.replaceAll((startval),(endval));

                  }
              
                  function twenty(){
                    var a=document.getElementById('Num1').value;
                   
                    const startval = a.split("");
                
                    a = "";
                    for (let i = 0; i < startval.length; i++) {
                      a += startval[i] + "<br>"
                    }
                    document.getElementById('res').innerHTML = a;
                  }
              



               
         
              
        


               
                  
                  
                  

                

  
 
 



                  
                 



