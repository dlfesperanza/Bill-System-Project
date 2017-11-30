# acss-node-react-starter-pack
ACSS Node React Starter Pack
============
```
A repository for the Alliance of Computer Science Students' Members
```
## Prerequisites
------------
```
* MySQL for Database
* `sudo apt install npm`
* `sudo npm install -g nodemon`
* `sudo npm install -g concurrently`
* `sudo npm install -g n`
* `sudo n stable` This part makes sure that our NodeJS version is the stable one.
* The command "sudo n latest" will download the latest version of Node.js and if the version is not the latest after running the command, run `sudo ln -sf /usr/local/n/versions/node/<VERSION OF NODE>/bin/node /usr/bin/node` 
```
## Command(s)
------------
```
* `git clone https://github.com/EddieVallejos/acss-node-react-starter-pack.git`
* `cd acss-node-react-starter-pack`

To obtain packages that the back-end will be using..
* `npm install`

To obtain packages that the front-end will be using..
* `cd front-end`
* `npm install`

To add npm packages to package.json..
* `npm install --save <package>`

To add npm packages to bower.json..
* `bower install <package> --save`
```

## To start the web server and React app
------------
```
* `npm start` or `sudo npm start` in the main folder(acss-node-react-starter-pack folder)

then check http://localhost:3000 for the react application and http://localhost:3001 for the server
```
## Conventions (Tip)
------------
``` For the back-end part ```

1. Use snake_case for variable names

	e.g.:
	const login_session;

2. Don't exceed the 80th column. If the statement is going to exceed, put it in the newline with 2 tabs first, Eg.

	if (condition1 && condition2 &&
	<TAB><TAB>condition3)

3. For syntax of if, while, functions, etc., follow this format:

	if (condition) 
	{
		// statements here
	}

	else if (condition) 
	{

	}
4. Always use spaces for indention instead of tabs. (To distinguish the 80th column)

5. For controllers, follow the 'known function' convention for callbacks

6. Always add comment to your created function. This is not your solo code. Let other devs know what is the purpose of your function