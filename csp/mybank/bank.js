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
        alert("Wrong password or account number, please try again")
    }
}
function success(){
    document.getElementById("success")
    window.location.href= './account.html'
    
}
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
    var profitpers=[0.08,0.035,0.05,0.02]
    var Annualinterestratechoice=["8% for each year and last 20 years","3.5% for each year and last 10 years","5% for each year and last 15 years","2.5% for each year and last 5 years","2% for each year and last any years"]
    var choice = prompt("Choose your loan method "+ "\n" +"1. "+Annualinterestratechoice[0]+ "\n" +"2. "+ Annualinterestratechoice[1] + "\n" + "3. "+ Annualinterestratechoice[2] + "\n" +"4. "+ Annualinterestratechoice[3]+ "\n" +"5. "+ Annualinterestratechoice[4])
    if(choice == 1){
        var year = 20
        var profitper = profitpers[0]
    }
    else if(choice == 2){
        var year = 10
        var profitper = profitpers[1]
    }
    else if(choice == 3){
        var year = 15
        var profitper = profitpers[2]
    }
    else if(choice == 4){
        var year = 5
        var profitper = profitpers[3]
    }
    else if(choice == 5){
        var  year = parseInt(prompt("choose the year you want to have"))
        var profitper = profitpers[4]
    }
    else {
        alert("wrong input, please try again")
        return;
    }

    var totalmoney = calBalance(balance, year , profitper)
    alert("Prediction of your balance is = " + totalmoney)
    var ensure = prompt("Are you sure to choose this interest method? Input yes or no.")
    if (ensure=="yes"){
            alert("choose success")
            alert("after "+year+" years ......")
            sessionStorage.setItem("balance",totalmoney)
    }
    

}
/**
 * calculate total balance after years
 * 
 * @param {int} balance 
 * @param {int} year 
 * @param {float} profitper 
 * @returns total balance
 */
function calBalance(balance, year , profitper){
    for(let i = 1; i<= year; i++){
        balance = balance + balance*profitper;
    }
    return balance;
}