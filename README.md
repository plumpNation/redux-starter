# Redux starter

## Up and running

Run `npm i`
Open project in VSCode and install recommended extensions.
Read the jest.config.js
Read the babel.config.js

Babel is used to transform the module syntax into something that jest can run.
That is why we add a transform property to the jest config.
Babel compiles (actually transpiles) the file, jest runs the test.

## Explanation

I added jest so you could see it working.

If you open the project in vscode it will recommend to install a nice tool you
can use to run the tests directly in vscode.

The issue you had with trying to use modules in your tests likely was the same
as discussed in this stack overflow.

https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest

I added a reducer and tests for it to show you the basics. I didn't add a full redux application
because you don't need that to understand how to create your reducers and test them.

Given you have an idea about a UI design you can design your UI state, and then build
the reducers for that application without even starting a React project.