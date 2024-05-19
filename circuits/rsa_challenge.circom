pragma circom 2.1.6;

include "node_modules/circomlib/circuits/comparators.circom";

template MatchingNationality(nation) {  

   // Declaration of signals.  
   signal input asciiArray[nation];
   signal output result;

   var sum = 0;
   // Constraints.  
   for (var i = 0; i < nation; i++) {
      //asign
       sum = sum + asciiArray[i];
    }

   result <== sum;
}

template CheckAge() {
   // Declaration of signals. 
   signal input age;
   signal output isGreaterOrEqual;

   component gt = GreaterThan(5);
    gt.in[0] <== age;
    gt.in[1] <== 18;
	0 === gt.out;
    
   isGreaterOrEqual <== gt.out;
}

template ExpiryDateID() {
   // Declaration of signals. 
   signal input expiryDate;
   signal input currentDate;

   signal output isExpired;

   // Temp variable to check if expiryDate - current date + 30 days is non-negative
    signal temp;

    temp <== expiryDate - (currentDate + 30);

    component gt = GreaterThan(7);
    gt.in[0] <== temp;
    gt.in[1] <== 0;
	 0 === gt.out;
    // isExpired is 1 if temp is non-negative, 0 otherwise
    isExpired <== gt.out;
}

template MainCircuit(nationality) {
   signal input b;
   signal input asciiArray[nationality];
   signal input cd;
   signal input ed;

   signal output isMexican;
   signal output isGreaterOrEqual;
   signal output isExpired;

   component nation = MatchingNationality(nationality);
   component age = CheckAge();
   component expiryDate = ExpiryDateID();

   nation.asciiArray <== asciiArray;
   age.age <== b;
   expiryDate.expiryDate <== ed;
   expiryDate.currentDate <== cd;

   // outputs
   isMexican <== nation.result;
   isGreaterOrEqual <== age.isGreaterOrEqual;
   isExpired <== expiryDate.isExpired;
}

component main = MainCircuit(7);
