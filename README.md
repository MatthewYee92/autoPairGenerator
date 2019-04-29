# autoPairGenerator
declare variable arrLength with value that equals array.length
declare variable arrIndex to represent the array index
declare variable currentEle to represent current element
loop over the array.length value
while elements remain to pick from continue looping
step through array by cutting down the array length with selection
pick a remaining element by selecting index randomly
decrement m value each loop
swap it with current element
in essence array[arrLength] is the last element in the array
which will be decremented each loop when we assign array[arrIndex] = array[arrLength]
we pick a index randomly and assign the last element in the array to a random element through referring to its index
