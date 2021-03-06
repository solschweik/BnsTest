# BNS Assignment
## Prerequesites
Please, have *at least* following tools installed  
And available in PATH:

- Node.js version 8.11.2  
- Java 9.0.1  
- Eclipse IDE Oxygen

## Part 1
Contains Angular 7 application.  
The use is no different from any other Angular project.  
To start application, please, run following commands in command shell 

_cd BnsTest_

_cd Part1_

_npm install_

If you are in UNIX-like environment, run this to start application:

_./node_modules/.bin/ng serve --port 1111_

For Windows use this command:

_node_modules\\.bin\ng serve --port 1111_

Open application URL in your browser http://localhost:1111

## Part 2

This part implements Sudoku grid verification algorithm.  
It's done both in Java and Typescript (JavaScript).

### TypeScript (JavaScript) version

To run the application follow this instructions:

_cd BnsTest_

_cd Part2_

_npm install_

__On UNIX (assuming Node.js is in PATH):__

_node js/sudoku.js numbers_

OR (using _ts_node_)

_./node_modules/.bin/ts-node js/sudoku.ts numbers_  

__On Windows:__

_node js\sudoku.js numbers_  

OR (using _ts_node_) 

_node_modules\\.bin\ts-node js\sudoku.ts numbers_  

### Java Version

__NOTE:__ Java project contains some unit tests.  
It's runnable in Eclipse. 
- Open _AllTests.java_. 
- Right-click and _Run As / Junit Test_

#### Importing and Running Project
1. Open new workspace
2. Open _File / Import... / General / Existing Project into Workspace_
3. Click Next
4. Click _Browse_ and select 
5. ${DIR}/BnsTest/Part2/java/sudoku
6. Click _Select All_
7. Click _Finish_
8. Open Sudoku.java 
9. Right click anywhere in the file 
10. Select _Run As / Java Application_

stdout: "Please, provide file name!"

11. Go to _Run / Run Configurations_
12. Select _Sudoku_ configuration 
13. Click on _Arguments_ tab
14. In _Program Arguments_ type _numbers_
15. Click _Run_

stdout should now show "File is valid!"
