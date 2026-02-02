/**
 * register account
 */
function register(){
    var name=document.getElementById("account").value;
    var password=document.getElementById("password").value;
     
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('password',password);
    
    window.location.href= './login.html';
}

function login(){
    var name1=document.getElementById("account").value;
    var password1=document.getElementById("password").value;
    var name = sessionStorage.getItem('name');
    var password = sessionStorage.getItem('password');
    if(name==name1 && password==password1){
    alert("Welcome to the bank")

    sessionStorage.setItem("balance",0);
        success()
    }
    else{
        alert("Wrong password or account, please try again")
    }
}
function success(){
    document.getElementById("success")
    window.location.href= './account.html'
    
}

var profitpers=[0.08,0.04,0.05,0.025,0.02]
var years = [20,10,15,5,0]

/**
 * check balances
 */
function checkbalance(){
    alert("Your balance is "+ sessionStorage.getItem("balance"))
}
/**
 * withdraw money 
 */

function withdraw(){
    var withdraw = prompt("How many do you want to withdraw?")
    if (withdraw == "" || withdraw == null){
        alert ("wrong input!")
        withdraw = 0
    }
    else{
        var balance = parseInt(sessionStorage.getItem("balance"))
        balance = balance - parseInt(withdraw)
        if(balance<0){
        alert("There's no enough balance")
        balance=balance + parseInt(withdraw)
        }
        else{
            alert("Withdraw success, your current balance is "+ balance)
        }
        sessionStorage.setItem("balance",balance)
    }
}
/**
 * deposit money
 */


function deposit(){
    var deposit = prompt("How many do you want to deposit?")
    var balance = parseInt(sessionStorage.getItem("balance"))
    if (deposit == "" || deposit == null){
        alert ("wrong input!")
        deposit = 0
    }
    else{
    balance = balance + parseInt(deposit)
        alert("Deposit success, your current balance is "+ balance)
        sessionStorage.setItem("balance",balance)
    }
}


function choice(){
    var balance = parseInt(sessionStorage.getItem("balance"))

    var promptText = ""

    for(let i=0;i<profitpers.length ;i++){
        if(years[i] == 0){
            var year = 'any'
        }else{
            var year = years[i]
        }
        var choiceLine = i+1 +". " + profitpers[i] * 100 + "% for each year and last "+ year + " years.\n" 
        promptText += choiceLine
    }


    var choice = parseInt(prompt(promptText))

    

    if(choice >0 && choice <= 5){
        let totalMoney = calBalanceByChoice(balance,choice)
        alert("Prediction of your balance is = " + totalMoney)
        var ensure = prompt("Are you sure to choose this interest method? Input yes or no.")
        if (ensure=="yes"){
                alert("choose success")
                alert("after "+year+" years ......")
                sessionStorage.setItem("balance",totalMoney)
        }
        else if(ensure="no"){
            alert("please choose again!")
        }
        else{
            alert("wrong input!")
        }
    }else{
        alert('please input a nubmer between 1 to 5!')
    }
    
}
/**
 * calculate total balance after years
 * 
 * @param {int} balance 
 * @param {int} choice 
 * @returns total balance
 */

function calBalanceByChoice(balance,choice){
    var profitper = profitpers[choice-1];
    if(choice >0 && choice < 5){
        var year = years[choice-1];
    }else if(choice == 5){
        var  year = parseInt(prompt("choose the year you want to have"));
    }
    var totalMoney = balance;
    for(i = 1; i<= year; i++){
        totalMoney = totalMoney + balance*profitper;
    }
    return totalMoney;
}