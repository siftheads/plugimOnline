// This is a JavaScript file

$(document).on("click","alerta",function(){
function retorno (){
}
novigator.notification.alert("minha mensagem",retorno,"Aviso!,","Aceito");
});



$(document).on("click","confirm",function(){
function confirm (bottonIndex){
novigator.notification.alert(bottonIndex);
}
novigator.notification.confirm("escolha A ou B",confirm,"escolho:",['A','B']);
)};