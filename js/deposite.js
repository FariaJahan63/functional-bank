//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
//step-2
//id diye input nici,tarpor input take float e convert  
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString= depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
  // console.log(newDepositAmount);
  //step-3
  //input dewar por field ta clean kora
  depositField.value='';
  //step-4

  const depositTotalElement=document.getElementById('deposit-total');
  const previousDepositTotalString=depositTotalElement.innerText;
  console.log(previousDepositTotalString);
  const previousDepositTotal=parseFloat(previousDepositTotalString);
  //step-5
  const newDepositTotal=previousDepositTotal+newDepositAmount;
  depositTotalElement.innerText=newDepositTotal;
  // step-6
  const balanceElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-7
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceElement.innerText = newBalanceTotal;
})