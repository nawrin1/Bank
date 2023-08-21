document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositField= document.getElementById("deposit-field");
    const newDepositAmountString= depositField.value;
    const newDepositAmount=parseInt(newDepositAmountString)
    
    const depositTotalElement= document.getElementById("deposit-total")
    const depositPreviousTotalString=depositTotalElement.innerText;
    const depositPreviousTotal=parseInt(depositPreviousTotalString)
    
    depositField.value="";
    const currentDepositTotal=newDepositAmount+depositPreviousTotal;
    depositTotalElement.innerText=currentDepositTotal;
    const balanceTotalElement= document.getElementById("balance-total")
    const balancePreviousTotalString=balanceTotalElement.innerText;
    const balancePreviousTotal=parseInt(PreviousTotalString)
    const currentBalanceTotal=newDepositAmount+balancePreviousTotal;
    balanceTotalElement.innerText=currentBalanceTotal;
    
})