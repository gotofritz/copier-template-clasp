# copier-template-clasp

A copier template for a [Clasp](https://github.com/google/clasp) project, that allow you to code Google Apps Script locally with typescript. This is based on [PopGoesTheWza own template](https://github.com/PopGoesTheWza/ts-gas-project-starter) - he was one of Clasp's main contributors

I have written about the _why_ in a [blog post](https://gotofritz.net/blog/clasp-template-for-local-google-apps-script-projects-using-copier). Read on for the _hows_

## Prerequisites

This is [Copier](https://copier.readthedocs.io/en/stable/) boilerplate (if you are unfamiliar with it, it's kind of a Python version of the old Yeoman and shares similarities with Plop.js). To seed your own project you will need Python >= 3.7. If you don't have Python installed I suggest using pyenv to manage it (pyenv is similar to Node's nvm). On a Mac:

```bash
❯ brew install pyenv
...

# latest stable version at the time of writing
❯ pyenv install 3.11
...

❯ pyenv global 3.11
❯ pip install copier
...
```

To run the project you will also need the clasp tool

```bash
# npm, pnpm, yarn, or any of these shinier alternatives all work
❯ npm install -g @google/clasp
...
```

And if you want the repo in watch mode, so that it automatically bundles the project when you save, you need fswatch

```bash
❯ brew install fswatch
...
```

## Generating a project from the boilerplate

Once all the prerequisites are installed you can simply create a project with

```bash
❯ copier https://github.com/gotofritz/copier-template-clasp my-project-folder
...
```

the tool will ask you a few questions, and then create the project and git repo for you. You will probably have to sign into your Google Account to authorise clasp to push code.

## Development cycle

The boilerplate will create both the local Typescript files and the remote Sheet / Doc / whatever you specified. Open your Drive in your browser and find the document there (the name will be your answer to the "Title of your app" question when you cloned the project)

Once you are set up it's a matter of making local changes, transpiling to JS, pushing to Google, refreshing your document in your browser. You can do the pushing manually, with

```bash
❯ npm run build-push
...
```

or you can let the watch script run, and it will push code for you

```bash
❯ npm run build-push
[18:02:33] File change detected. Starting incremental compilation...

[18:02:33] Found 0 errors. Watching for file changes.
```

### Tests

I haven't managed to get tests to run yet. Clasps expects a single file without modules, and most Typescript test runners expect modules. Haven't yet found a way to make both work the same time. d

## Licence

BSD Zero Clause License
