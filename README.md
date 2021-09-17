# Code Wars Challenges

### Purpose
Hello coders, recruiters, and fellow developers. Thank you for taking the time to visit my repo. I am starting this repo as a way to challenge myself and become a better developer. I will be updating this repo daily with new challenges and my solutions to the problem. The primary focus here will be mastering JS as it is the most popular programming language in the world. 


#### Day 1 -  [Stop gninnipS My sdroW!](./Day1-Stop-gninnipS-My-sdroW!/main.js)

**Description:**
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

**Examples:**

```
spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"

```

#### Day 2 -  [List Filtering](./Day2-List-Filtering/main.js)

**Description:**
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

**Examples:**
```
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

```

#### Day 3 -  [Duplicate Encoder](./Day3-Duplicate-Encoder/main.js)

**Description:**
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Examples:**
```

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

```


#### Day 4 -  [You're A Square](./Day4-You're-a-square!/main.js)

**Description:**
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

**Examples:**

```

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

```

#### Day 5 -  [Printer Errors](./Day5-Printer-Errors/main.js)

**Description:**
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from ```a to m```.

The colors used by the printer are recorded in a control string. For example a "good" control string would be ```aaabbbbhaijjjm``` meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. ```aaaxbbbbyyhwawiwjjjwwm``` with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

**Examples:**
```

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

```

#### Day 6 -  [Printer Errors](./Day6-Detect-Pangram/main.js)

**Description:**
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

**Examples:**
```

"The quick brown fox jumps over the lazy dog." => true

"This is not a pangram."=> false

```

#### Day 7 -  [Printer Errors](./Day7-Replace-With-Alphabet-Position/main.js)

**Description:**
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
```"a" = 1, "b" = 2,``` etc.

**Examples:**
```

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

```