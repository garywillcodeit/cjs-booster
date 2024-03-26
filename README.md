# CJS Booster
This package will take your CJS Javascript projects to the next level. Discover lot of methods to do things easily.

## Methods list
### allTrue(array)
allTrue() checks if all elements of an array are truthy. If so, it will return true. othewise, false.

### anyTrue(array)
allTrue() checks if at least one element of an array is truthy. If so, it will return true. othewise, false.

### capitalize(string)
capitalize() returns a string where each word has an initial capitalized letter.

### getFormat(mimetype:string)
getFormat() returns the file format related to the mimtype.

### isDigit(string)
isDigit() checks if the string contains only digits.

### isEmpty(array or object)
isEmpty() checks if an array is empty or an object has no property.

### isNull(any types)
isNull() checks if the parameter is truthy or falsy.

### isObject(any types)
isObject() checks if the parameter is an object or not.

### mapFor(array, prop:string)
mapFor() returns an array containing only the properties in the second parameter. The parameter prop is necesary only if the array contains objects.

### maxValue(array, prop:string)
maxValue() returns the array's element with the higher value (or the object with the higher prop's value).

### minValue(array, prop:string)
minValue() returns the array's element with the lower value (or the object with the lower prop's value).

### randomInd(array)
randomInd() returns a random element from the array.

### range(integer)
range() returns an array with a number of indexes equivalent to the integer.

### reduceFor(array, prop:string, init:number)
reduceFor() returns the accumulated sum of all elements in the array. If the array contains objects, the parameter "prop" is needed to targed the object property. A third parameter "init" can be defined.

### shuffle(array)
shuffle() returns an array where all element has changed index.

### sortAsc(array, prop:string)
sortAsc() returns an array sorted in ascending order. If the array contains object, the parameter "prop" is needed to target the object property.

### sortDesc(array, prop:string)
sortAsc() returns an array sorted in descending order. If the array contains object, the parameter "prop" is needed to target the object property.

### splitLines(string, lines:number)
splitLines() splits a string into the number of line defined in the second parameter. The lines are push into an array before being returned.

### title(string)
title() returns every word from the string with an initial capitalized letter.

### toArray(object)
toArray() takes an object in parameter and returns an array, with all properties as elements.

### toBool(string)
toBool() transforms a "true" string or a "false" string into a boolean true or a boolean false.

### toObject(array)
toObject() takes an object in parameter and returns an object, with all elements as values and the indexes as properties.

### toSlug(string, withTimestamps:booolean)
toSlug() tranforms a string into a slug.

### typeOf(any data)
typeOf() return the type of the data in parameters (array, object, float, integer, string, boolean).

## uid()
uid() return a random id based on the timestamp.
