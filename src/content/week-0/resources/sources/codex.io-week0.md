# 01. Setting Up

## [#](https://www.codedex.io/javascript/01-setting-up#what-is-javascript) What is JavaScript?

Welcome to The Origins III: JavaScript! Things are about to get fun. ✨

The programming language we're learning is called **JavaScript** and it powers 97.5% of websites today.



JavaScript

=core languages of the web.



HTML and CSS give a website structure and styling, but JavaScript makes it interactive and *come alive*. It lets us add basic functionality and dynamic behaviors to our web pages.

But how did it come to be?



The 90s was the dawn of the dot-com era, and an internet browser war was brewing between Netscape and Microsoft. In 1995, a Netscape developer created a buggy new scripting language... in just 10 days. 😵‍💫

Take this clickable button, for example:



Every time you click the button, the date and time get updated! This is but a small demo of what JavaScript can do.

Without further ado, let's write a line of JavaScript code.

## Instructions

Copy and paste the following onto line 3 of the code editor on the right.

```js
console.log("Hello internet!");
```

Press the "Run" button and wait 1-2 seconds.

This should appear in the Console window if you did it correctly:

```
Hello internet
```

You are now ready for the journey ahead. ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾

Press the "Submit answer" button and then "Next" to continue.





# 02. The Console

## [#](https://www.codedex.io/javascript/02-the-console#the-web-console) The Web Console

Hold up, what the heck is a web console?

A **web console** is a feature in your browser that can run JavaScript code.

It's usually located in the browser's Developer Tools:

It should look something like:

![Console window for JavaScript](https://www.codedex.io/images/javascript/exercise-2-console-window.png)



For now, we're going to use the editor and Console window that we created just for your learning experience. 👉🏼

## [#](https://www.codedex.io/javascript/02-the-console#console-log) Console Log

In JavaScript, the `console.log()` method tells the web console to output a message. We are going to use this *a lot*.

The message we want to display should be inside parentheses `(` `)` and surrounded by quotes. They can be double quotes `"` or single quotes `'`, but the opening and closing quote marks have to match.

This is an example of a `console.log()` method:

```js
console.log("👋 Howdy!");
console.log('👋 Howdy!');
```

In the code above, we instructed our program to print, or log, a message. The message can either be in double or single quotes.

The resulting text that is displayed is referred to as the **output**.

The output of the message would be:

```
👋 Howdy!
👋 Howdy!
```

**Note:** It's optional to include a `;` semicolon at the end of a line in JavaScript.

Now that we know more about the web console and outputting messages, let's try it again!

## Instructions

With the editor on the right, use `console.log()` to output your favorite food! 🍎

Were you able to log the message?

**Bonus:** Try repeating these instructions in your browser's web console.



# 03. Letter Tree

## [#](https://www.codedex.io/javascript/03-letter-tree#line-by-line) Line by Line

JavaScript runs one line of code at a time.

We can output multiple messages by using multiple `console.log()` methods. For example, if we want to print out two simple greetings:

```js
console.log("🚌 Greyhound to New York");
console.log("🕥 Departs at 9:30 am");
```

This will output:

```bash
🚌 Greyhound to New York
🕥 Departs at 9:30 am
```

Now let's use what we just learned to complete a special challenge!

## Instructions

Suppose we want the output to look exactly like this pattern below:

```bash
   a
  b c
 d e f
g h i j
   k
```

How can you do that?

Create a JavaScript program that prints this pattern exactly as shown.

This will likely take some trial and error, but give it a shot!



# 04. Secret Recipe

## [#](https://www.codedex.io/javascript/04-secret-recipe#comments) Comments

In programming, **comments** are used to document what our code does, for ourselves and other developers. They can also disable parts of the program. When the program is run, the comments are ignored.

In JavaScript, there are single line comments and multi-line comments.

### [##](https://www.codedex.io/javascript/04-secret-recipe#single-line-comments) Single Line Comments

We can create a single line comment using `//` two forward slashes:

```js
// console.log("Nada");

console.log("Hi"); // I'm a comment, too!
```

On each line, anything to the right of the `//` forward slashes is ignored when the code is run.

- The first line is a comment with code that gets ignored.
- The second line begins with runnable code, and ends with a comment.

The first `console.log()` is commented out while the other one is not. Therefore, the output would only be "Hi".

### [##](https://www.codedex.io/javascript/04-secret-recipe#multi-line-comments) Multi-line Comments

We can create a multi-line comment using `/*` to start the comment and `*/` to end it:

```js
/* This is commented out.
console.log("Nada.")
Yep! This is, too.
console.log("Not displayed, either.")
*/
```

Here, *everything* inside the `/*` and `*/` are commented out. So a multi-line comment can technically be as long as you want!

## Instructions

For this I want them to take their recipe assignment from web1 and use it for this. if they don't have a recipe assignment, then they should find a recipe... 

Some of the best recipes have one or more secret ingredients that give it epic flavor. 🤤

Famous examples include:

- Coca-Cola formula.
- Kentucky Fried Chicken (KFC)'s 11 herbs and spices.
- The sauce used in a Big Mac at McDonald's.

Write a recipe for your favorite dish. Be sure to include a list of ingredients, step-by-step instructions, and a comment about any "secret ingredient" you might use.

Feel free to use a mix of single line and multiline comments.

This will be homework for the weekend: 05. Receipt

## [#](https://www.codedex.io/javascript/05-receipt#congrats) Congrats!

We've made it to the end of the first chapter! 🎈

```js
console.log("Congrats! You've made it.");
```

To recap what we've learned:

- The `console.log()` method outputs messages to the Console window.
- JavaScript code runs one line at a time, from top to bottom.
- Single line comments are created using the `//` forward slashes.
- Multi-line comments are started by `/*` and closed with `*/`.

It's time to use what we've learned to build something fun!

## Instructions

You are going to recreate a receipt of a purchase from the last store or restaurant that you went to... using JavaScript! 🧾

Make sure to check your pockets and wallet if you forgot.



Use `console.log()` methods to print the following info:

- Name of the store/restaurant.
- A row that says "Order Details".
- A row with column names for "Item", "Quantity", and "Price".
- At least two items that were purchased.
- The total price for the purchase.

The output should look like:

```markdown
==================================
         McDONALD'S RECEIPT
----------------------------------
           Order Details
----------------------------------
Item           Quantity   Price
----------------------------------
🍔 Burger       1          2.99
🍟 Fries        1          2.49
🥤 Soda         1          1.99
----------------------------------
Total                      7.47
==================================
```

When you are done, take a screenshot and click the Twitter icon to share your receipt.

