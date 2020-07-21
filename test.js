function getdata(){
    var buyer_name = document.getElementById("name").innerText
    var date_of_movein= document.getElementById("moveindate").innerText
    var buyer_phone_numebr = document.getElementById("phone").innerText
    var email = document.getElementById("email").innerText
    var adress = document.getElementById("adress").innerText
    var price= document.getElementById("price").innerText
    var beds= document.getElementById("beds").innerText
    var baths= document.getElementById("bath").innerText
    var status= document.getElementById("status").innerText
    var days= document.getElementById("days").innerText
    var agent_name= document.getElementById("agent").innerText
    var agent_phone_number= document.getElementById("agentphone").innerText
    var broker= document.getElementById("broker").innerText
    var obj={buyer_name,email,buyer_phone_numebr,date_of_movein,adress,price,beds,baths
    ,status,days,agent_name,agent_phone_number,broker}
    console.log(obj)
}
getdata();
 
name,moveindate,phone,email,adress,price,beds,bath,status,days,agent,agentphone,broker