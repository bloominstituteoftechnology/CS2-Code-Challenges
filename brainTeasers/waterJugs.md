You have a five-quart jug, a three-quart jug, and an unlimited supply of water (but no measuring cups). How would you come up with exactly four quarts of water? Note that the jugs are oddly shaped, such that filling up exactly "half" of the jug would be impossible.

/*
fill 3 quart jug (3:3, 5:0)
transfer water to 5 quart (3:0, 5:3)
fill 3 quart (3:3, 5:3)
transfer 2 quarts from 3 to 5 (3:1, 5:5)
empty 5 quart (3:1, 5:0)
transfer 1 quart to 5 quart (3:0, 5:1)
fill 3 quart and transfer to 5 quart (3:0, 5:4)
the 5 quart jug now has a total of four quarts of water
*/