var a = '';
var b = '';
var num = [];
var ans;
//all the numbers and operators input will be stored in an array"num"using function"sendNum()"
function sendNum(digit)
{
    num.push(digit);
    if(num.length !=1){
        a = '';
        document.getElementById('screen').innerHTML= a;
    }
    for(i=0; i<num.length; i++){
        a = a+num[i];   //concatenate the elements of the array"num" into a single string,which will be displayed on the screen
    }
    document.getElementById('screen').innerHTML= a;  //displying the concatenated string

}
//when the user presses"=", function "equalto()"is called
 function equalTo(){
    document.getElementById('screen').innerHTML= '';

   for(i=0; i<num.length; i++)
   {
    b += num[i];     //concatenate  the array"num" into a single string
   }
   ans= eval(b);
   document.getElementById('screen').innerHTML=ans;  //result display


    while(num.length >0){
        num.pop();
    }
    num.push(ans.toString());
}

// when user press "AC",function "clearscr()"is called
function clearscr(){
    document.getElementById('screen').innerHTML='';
    while(num.length>0){
        num.pop();
    }
    a ='';
    b ='';
}