# CONTRIBUTING

First of all this package is useless, it is only made for beginner such as myself to practice. Any first-timer can
contribute to this resporsitory. **KITIAN** as well as anyone else. 


**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## SETUP INSTRUCTION

1. Fork the repo
2. Clone your fork
3. Create a branch
4. Run `npm install`
5. Run `npm t && npm run build`. If everything works, then you're ready to make changes. We run this test to make sure 
the package doesn't have any error even before you make any change. See the **CONTRIBUTION** for how to make change.
6. After making all the changes run `git status` to see what you have modified
7. Run `git add file_name` to add a certain file or run `git add .` to add all the modified files
8. Run `npm run commit` to commit the changes with standard message
9. Run `git push origin branch_name` to push the changes to the forked resporsitory
10. Make a pull request
11. In the pull request travis-cli will test the change again and if the pull request is merge without error [semantic-release-cli](https://www.npmjs.com/package/semantic-release-cli)
will publish a new version of the package in [random-functions-library](https://www.npmjs.com/package/random-functions-library)

#### CONTRIBUTION
- ***Adding a new function***

    1. make file to export a function in the `src/` folder using es6 `export default function_name` 
    you can modify the code from the first function `add` and look at the example to follow the standard
    2. import the function to `index.js` then export it in again in `index.js`
    3. go to `test/` folder make a file `function_name.test.js` this resporsitory is using [ava](https://github.com/avajs/ava)
    [![using ava](https://github.com/avajs/ava/blob/master/media/magic-assert-combined.png)](https://github.com/avajs/ava/blob/master/media/magic-assert-combined.png)
    4. you can run `npm run build` to compile the `src/` folder into `lib` folder
    5. run `npm test` or `npm t` to run the test
    6. run `npm run lint` to test the eslint if the files in `src/` meet the rules in `.eslintconfig` file *recommended: install extension for eslint*
    
#### GOOD LUCK XD    
