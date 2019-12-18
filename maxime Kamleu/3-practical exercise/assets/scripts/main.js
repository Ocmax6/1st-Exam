// ********************** 3-Practical Exercise ******************

const users = [
    {name: 'Kamdjou Duplex', subscription_date: '26/04/2005', phone: '670274538', eligibility: 'true'},
    {name: 'Max Bombel', subscription_date: '26/04/2010', phone: '670653539', eligibility: 'false'},
    {name: 'Cript Well', subscription_date: '26/04/2009', phone: '679364878', eligibility: 'true'},
    {name: 'Lunky man', subscription_date: '26/04/2015', phone: '670889999', eligibility: 'true'},
    {name: 'John Doe', subscription_date: '26/04/2000', phone: '679876554', eligibility: 'true'}
];

const newusers =[
    {name: 'Junior Pro', subscription_date: '10/11/1999', phone: '678585734', eligibility: 'true'},
    {name: 'Luna Eva', subscription_date: '24/12/2018', phone: '678543232', eligibility: 'true'}
]
// ********** 3.a- *****************************

for(let i = 0; i < users.length; i++){
    console.log(`${users[i].name}: ${users[i].phone}`);
    
}
//****************** 3.b ************************* 

for(let k=0; k<newusers.length; k++){
    newusers.push(users[k]);
    console.log(`${newusers[k].name}: ${newusers[k].subscription_date} ${newusers[k].phone} ${newusers[k].eligibility}`);
}

for(let j=0; j<newusers.length; j++){
    if(newusers[j].eligibility == 'false')
        newusers.pop(newusers[j].eligibility);
        console.log(`${newusers[j].name}: ${newusers[j].subscription_date} ${newusers[j].phone} ${newusers[j].eligibility}`);   
}






    

// // ******************** Function Manipulation ********************


// function conversion(amont, firstCurrency, secondCurrency){
//     if(amont > 0){
//         amont *= firstCurrency;
        
//     }
// }






