document.getElementById("btn-withdraw").addEventListener("click",function(){
    const withdrawField= document.getElementById("withdraw-field");
    const newWithdrawAmountString= withdrawField.value;
    const newWithdrawAmount=parseInt(newWithdrawAmountString)
    console.log(newWithdrawAmount)
    withdrawField.value="";
    if(isNaN(newWithdrawAmount)){
        alert("provide a number")
        return
    }
    const withdrawTotalElement= document.getElementById("withdraw-total")
    const withdrawPreviousTotalString=withdrawTotalElement.innerText;
    const withdrawPreviousTotal=parseInt(withdrawPreviousTotalString)
    


    const balanceTotalElement=document.getElementById("balance-total")
    const balancePreviousTotalString=balanceTotalElement.innerText;
    const balancePreviousTotal=parseInt(balancePreviousTotalString)
    if (newWithdrawAmount>balancePreviousTotal){
        alert("no money")
        withdrawField.value="";
        return
    }
    else{
        const currentWithdrawTotal=newWithdrawAmount+withdrawPreviousTotal;
        withdrawTotalElement.innerText=currentWithdrawTotal;
        
    }

    withdrawField.value="";
    const newBalanceTotal= balancePreviousTotal-newWithdrawAmount
    balanceTotalElement.innerText=newBalanceTotal



})