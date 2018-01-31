# reactworkshop
These are my raw thoughts as I work through the modules. The context for my comments: I am a complete beginner. I have worked through basics for HTML, CSS, and most of a Javascript course on Codecademy. I have not applied these. My knowledge is pretty limited, so there are very basic things I do not know/remember.

# Setup and Module 1
## 01/27/18 
* 12:00 -- Figuring out how to set up Git and Github. Figuring out how to find/look at/edit these files in VSCode.

* 13:00 -- Dave kindly called in to help me set it up.

* 13:50 -- Reading carefully through Module 1. It is not entirely over my head, but even concepts like "parent component" are things I have to infer. The example code of the counter is also not entirely gibberish to me, so I'm putting trust in the course that I will have more confidence looking at this kind of syntax later. Currently thinking, "Should I run through a basic JS course first, as a refresher? Am I too much of a beginner?"

# Module 2
## 01/27/18 
* 14:00 -- "Oh wait, Redux is it's own thing too. What is it?" Googled 'Redux.'

* 14:05 -- Had to open workshop instructions on Github, because I didn't know what ```bash meant. I get what it's doing now, haha. As for "git init", I think my repo is already initialized? Do I type "npm init" into the Workshop's cloned repo, or my own?

* 14:15 -- Dave explains that this is all in the context of my project, so I should be working from the terminal in my own window.

* 14:35 -- Figured out how to show hidden files so I could copy .gitignore into my project directory through Finder.

 * 14:36 -- Assume that "accept the defaults" means to hit enter many times... and yes, it does! Yay, my first json file!

* 14:39 -- Installing Babel. Wondering, "Is this installed for all future projects, or just my current project? My assumption is all." This intall comes with the following warnings:
    * npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
    * npm WARN babel-loader@7.1.2 requires a peer of webpack@2 || 3 but none is installed. You must install peer dependencies yourself.

* 14:40 -- The webpack install comes with the following warnings:
    * npm WARN babel-loader@7.1.2 requires a peer of webpack@2 || 3 but none is installed. You must install peer dependencies yourself.
    * npm WARN webpack-dev-server@2.11.1 requires a peer of webpack@^2.2.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
    * npm WARN webpack-dev-middleware@1.12.2 requires a peer of webpack@^1.0.0 || ^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.

* 14:41 -- I've heard of SASS as well as LESS, I think? My current understanding is that these compilers take my code and translate it into some kind of style sheet, but I'm really unsure. Why use SASS over LESS? This comes with the following warnings:
    * npm WARN babel-loader@7.1.2 requires a peer of webpack@2 || 3 but none is installed. You must install peer dependencies yourself.
    * npm WARN webpack-dev-middleware@1.12.2 requires a peer of webpack@^1.0.0 || ^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
    * npm WARN webpack-dev-server@2.11.1 requires a peer of webpack@^2.2.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
    * npm WARN sass-loader@6.0.6 requires a peer of webpack@^2.0.0 || >= 3.0.0-rc.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
     * npm WARN schema-utils@0.4.3 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.

* 14:48 -- Wondering when I should commit changes? Is this something that should be done very often, like saving my design files, or should I wait until I'm a ways in? Currently waiting to see if the instructions say, "Commit now."

* 14:51 -- Have created the basic application structure. Already seeing a difference in files. My project has created a "node_modules" folder that I do not see in the workshop files. The folder has over 16,000 files in it, haha.

* 14:56 -- Inserted scripts into the package.json file and ran Start. Got the following errors:
    * npm ERR! missing script: start
    * npm ERR! A complete log of this run can be found in:
    * npm ERR!     /Users/mia/.npm/_logs/2018-01-27T19_54_58_707Z-debug.log
    So the start script is still missing somehow... Maybe I should go ahead and commit all of my files. That may help them work together?

* 15:01 -- Um, yes, saving changes definitely helps, haha. But now I'm getting a LOT of errors, starting with not being able to "find module 'webpack'". Here is the log for that.
    * 0 info it worked if it ends with ok
    * 1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]
    * 2 info using npm@5.6.0
    * 3 info using node@v8.9.4
    * 4 verbose run-script [ 'prestart', 'start', 'poststart' ]
    * 5 info lifecycle reactworkshop@1.0.0~prestart: reactworkshop@1.0.0
    * 6 info lifecycle reactworkshop@1.0.0~start: reactworkshop@1.0.0
    * 7 verbose lifecycle reactworkshop@1.0.0~start: unsafe-perm in lifecycle true
    * 8 verbose lifecycle reactworkshop@1.0.0~start: PATH: /usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/mia/vibeReact/reactworkshop/node_modules/.bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
    * 9 verbose lifecycle reactworkshop@1.0.0~start: CWD: /Users/mia/vibeReact/reactworkshop
    * 10 silly lifecycle reactworkshop@1.0.0~start: Args: [ '-c', 'webpack-dev-server --open' ]
    * 11 silly lifecycle reactworkshop@1.0.0~start: Returned: code: 1  signal: null
    * 12 info lifecycle reactworkshop@1.0.0~start: Failed to exec start script
    * 13 verbose stack Error: reactworkshop@1.0.0 start: `webpack-dev-server --open`
    * 13 verbose stack Exit status 1
    * 13 verbose stack     at EventEmitter.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:285:16)
    * 13 verbose stack     at emitTwo (events.js:126:13)
    * 13 verbose stack     at EventEmitter.emit (events.js:214:7)
    * 13 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
    * 13 verbose stack     at emitTwo (events.js:126:13)
    * 13 verbose stack     at ChildProcess.emit (events.js:214:7)
    * 13 verbose stack     at maybeClose (internal/child_process.js:925:16)
    * 13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
    * 14 verbose pkgid reactworkshop@1.0.0
    * 15 verbose cwd /Users/mia/vibeReact/reactworkshop
    * 16 verbose Darwin 17.3.0
    * 17 verbose argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
    * 18 verbose node v8.9.4
    * 19 verbose npm  v5.6.0
    * 20 error code ELIFECYCLE
    * 21 error errno 1
    * 22 error reactworkshop@1.0.0 start: `webpack-dev-server --open`
    * 22 error Exit status 1
    * 23 error Failed at the reactworkshop@1.0.0 start script.
    * 23 error This is probably not a problem with npm. There is likely additional logging output above.
    * 24 verbose exit [ 1, true ]

* I think I will end it here for today and forward my issues to Dave.

* 15:12 -- Maybe I should figure out formatting so I don't make Dave's eyes bleed.

## 01/29/2018
* 20:18 -- Re-installed webpacks and configurations! Moment of truth: npm start
* 20:20 -- IT WORKED!

# Module 3
## 01/29/2018
* 20:30 -- Unsure if Dave would like me to point out spelling errors, but in case he copies his exact texts for his book, this may be important! "Function" misspelled on line 240 in the Read Me.
* 20:44 -- My first React component!!
* 20:51 -- Question as I'm tooling along: Why do we use a semi-colon after the JSX element, but not after the HelloWorld function?
* 20:54 -- Note to self... must learn basic vocabulary like "expression" and "argument" hahaha
* 21:01 -- Looked up "JWT token" and "const". Yeppp, will definitely be taking the basic JS course again.

# Module 4
## 01/30/2018
* 19:32 -- Made folders and a new file in the terminal all by myself B-)
* 19:34 -- "Because we want React to handle placing the login form on the page we don't need to import `ReactDOM`." I'm still unsure what actually /places/ things on the page. I think it's the "ReactDOM.render()" function. Does this mean index.jsx is the only file that actually shows components on a page? So we're creating another file to host the login form, I get that, and I get why... but we're going to call it into the index.jsx page to render it, correct? How will this relate to the index.html page? Maybe I'm getting ahead of myself.
* Googled "export default" and "extends", wondering what precise part they play in creating the class component. "Export default" was a pretty easy guess, just wanted to be sure. Why does it go first? "Extends" means... something about lifecycles and inheriting properties? So in our case, the class "LoginForm" inherits properties of the "Component" class, but I'm unsure just what those properties are.
* "Note that we don't need to make any changes to our underlying `index.html` document to handle this new component; we simply tell `ReactDOM` to render the `LoginForm` within the `#container` element." I did get ahead of myself!! It all makes sense now!
* Failed to compile the Login Form. Looked at the errors... I didn't nestle the "components" folder in the dev, I put it in the root.
* Successful compiling, but the login form did not render. Turns out, I did not capitalize "DOM". So picky! :)
* How does the form know to behave certain ways? Turning blue when my cursor hovers over it, etc? I assume this has something to do with the className or id in the component. I'm unsure where those are coming from. Is it the bootstrap style sheet that's linked in index.html? Are these inherent properties of the Component class?
* The lifecycle list, as well as the linked article, really helped me click some things. Especially what the DOM is.
* "Furthermore, although state is private to an individual component, it can be passed to child components as props!" My head is spinning, but I think I get it!
* Unsure where to put the constructor(props) and the handleLogin(e). I'm assuming in loginForm.jsx.
* Copied them directly into loginForm.jsx, but it says I'm missing a semicolon, I think?
```javascript
ERROR in ./dev/components/app/loginForm.jsx
Module build failed: SyntaxError: Unexpected token, expected ; (22:15)

  20 |
  21 |
> 22 | handleLogin(e) {
     |                ^
  23 |     var emailAddress = document.querySelector("#username").value;
  24 |     var password = document.querySelector("#password").value;
  25 |
```
* I don't think I'm putting these in the right place, I'm really unsure. Gonna call it a night.

