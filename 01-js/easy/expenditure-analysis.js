/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const output = [];
  transactions.forEach(transaction => {
    var rec = output.find(x => x.category == transaction.category);
    
    if(rec){
      const amount  = rec.totalSpent + transaction.price;
      output.map(x => {
        if(x.category == transaction.category){
          x.totalSpent = amount;
        }
      })
    }
    else{
      var rec = {
        category : transaction.category,
        totalSpent : transaction.price
      }
      output.push(rec);
    }
    

  });
  return output;

}

module.exports = calculateTotalSpentByCategory;
