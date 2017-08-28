You have a five-quart jug, a three-quart jug, and an unlimited supply of water (but no measuring cups). How would you come up with exactly four quarts of water? Note that the jugs are oddly shaped, such that filling up exactly "half" of the jug would be impossible.

threeQ = 3;
fiveQ = 5;

Fill up threeQ,
pour into fiveQ,
threeQ = 0; fiveQ = 3;
Repeat
threeQ = 1; fiveQ = 5;
Empty fiveQ
Pour threeQ into fiveQ
Fill threeQ, pour into fiveQ
threeQ = 0; fiveQ = 4;