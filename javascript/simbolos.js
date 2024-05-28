var glob_idd_padre="";
function anadir_caracter(caracter1){var tex5=document.getElementById('text_box').value; 
                                    tex5+=caracter1; document.getElementById('text_box').value = tex5;finalFoco();copyTextDeInput('mensaje1');
                                   }


function trasladar_div(caracter1,idd_padre_actual){anadir_caracter(caracter1);
                                                   if(glob_idd_padre=="")glob_idd_padre="contenido1"; 
                                                  }
function copiar_input1(idelemento){ var aux = document.createElement("div");aux.setAttribute("contentEditable", true); aux.innerHTML = document.getElementById(idelemento).value;aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");document.body.appendChild(aux);aux.focus();document.execCommand("copy");document.body.removeChild(aux);}


function finalFoco(campo)
{var campo = document.getElementById('text_box');
    var explor = navigator.appName;         //Identificar el explorador
    if (explor == "Microsoft Internet Explorer")   //Codigo para MS Internet Explorer
    {   var range = campo.createTextRange();
        range.collapse(false);
        range.select();
    }
    else if (explor == "Netscape")      //Codigo para Netscape: Chrome, Mozilla
    {
        with (campo) {
            selectionStart = selectionEnd = value.length;
            focus();
        }
    }
    else        //Si no es ninguno de los anteriores, uso el de IE
    {
        var range = campo.createTextRange();
        range.collapse(false);
        range.select();
    }
}


function copyTextDeInput(idMensaje){ var text="";
    var text=document.getElementById("text_box").value;
    var id = "el-id-del-textarea"; globIdMensaje=idMensaje;
    var existsTextarea = document.getElementById(id);

    if(!existsTextarea){ var textarea = document.createElement("textarea");  textarea.id = id;
                         textarea.style.position = "fixed";textarea.style.top = 0; textarea.style.left = 0; textarea.style.width = "1px";        textarea.style.height = "1px";
                         textarea.style.padding = 0;  textarea.style.border = "none";  textarea.style.outline = "none";  textarea.style.boxShadow = "none";  textarea.style.background = "transparent";
                         document.querySelector("body").appendChild(textarea);   existsTextarea = document.getElementById(id);
    }else{   }
    existsTextarea.value = text; existsTextarea.select();

    try { var status = document.execCommand('copy'); if(!status){ fracaso(); }else{ exito(); }
        } catch (err) {  excepcion(); }

    if(!existsTextarea){document.body.removeChild(existsTextarea);}
}

var globIdMensaje = "mensaje1";
    
    function exito() { MostrarAlerta(2500,"Texto Copiado...","transparent"); }
    function fracaso() { MostrarAlerta(5500,"No se pudo copiar, realiza el copiado manual o prueba otro navegador...","#F79F81"); }
    function excepcion() {MostrarAlerta(5500,"No se pudo copiar, realiza el copiado manual o prueba otro navegador...","#F79F81"); }
    function ocultarAlerta() {document.getElementById(globIdMensaje).innerHTML = "";}
    function MostrarAlerta(tiempo,texto1,color) {document.getElementById(globIdMensaje).innerHTML = "<div style=\"background:"+color+";font-size:13px;padding-left:5px;color:#222;width:100%;\">"+texto1+"</div>";
                                                 setTimeout(ocultarAlerta, tiempo);
                                                }


$(document).ready(function(){
 $(".simb").delegate("span","click", function(){
           var aaa=$(this).text();
           $('#mostrando').text(aaa);
anadir_caracter(aaa);

 });
 
});


function construir_boton(){var tex5=""; tex5=document.getElementById('text_box').value; 
                           vec1 = tex5.split(" ");var cade='';var re='';
                            for(var x=0; x<vec1.length; x++)
                               {if(vec1[x]!=""){   
                            re = /\</gi; vec1[x] = vec1[x].replace(re, '&#60;'); 
                            re = /\>/gi; vec1[x] = vec1[x].replace(re, '&#62;');
                            re = /\'/gi; vec1[x] = vec1[x].replace(re, '&#39;');
                            re = /\\/gi; vec1[x] = vec1[x].replace(re, '&#92;'); 
                            re = /\"/gi; vec1[x] = vec1[x].replace(re, '&#34;');
                            re = /\=/gi; vec1[x] = vec1[x].replace(re, '&#61;');

                            re = /&#92;/gi; enviar_link = vec1[x].replace(re, '\\&#92;');
                            re = /&#34;/gi; enviar_link = enviar_link.replace(re, '\\&#34;');
                                if(x==0) cade+='<div id="simbolos'+(x+1)+'">'; 
                                  cade+='<input name="button2" class="button1" type="button" onclick=\'trasladar_div("'+enviar_link+'",""+this.parentNode.id+"")\' value="'+vec1[x]+'" />';
                                if(x==vec1.length-1){cade+='</div>'; }
                                                }
                               }
                         cade=encode(cade);
                            document.getElementById('mostrando').innerHTML = cade;
                          }


function encode(r){ return r.replace(/[\x26\x0A\<>'"]/g,function(r){return"&#"+r.charCodeAt(0)+";"}) } 

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}