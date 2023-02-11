## --- Init project ---
1) Run 'npm init vite', answer several questions
2) Run 'npm i'

## --- ESLint setup ---
1) Run 'npm i eslint --save-dev'
2) Run 'npm init @eslint/config' => Answer several question for setup
3) Add under scripts in package.json: "lint": "eslint ./" 
=> Command: 'npm run lint'
=> If command fails: add "project: ['path-to-tsconfig.json'] under "parserOptions in eslintrc.cjs file"

4) Next, to avoid having to run command, install the ESLint extension from Microsoft.
=> Now the warnings/error will display in the code through the plugin.
=> Note: Configure rules <- see commit details

5) Fix workspace settings in VS code, to open the settings.json:
a) Click: ctrl + shift + p
b) Insert: 'Preferences: Open Workspace Settings (JSON)'
c) Select it to open settings.json (empty json file)

(Optional) - For auto fix all easy fixes on save, add the following to settings.json:

"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}