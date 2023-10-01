# Web Admin Template

This is React.js admin template

## Library use

- Vite.js + React.js
- React Router V6
- Material/TailwindCss
- Headless UI
- Axios

## How to start

1. Clone this repo
2. Install Yarn if doesnt exist

```
npm i -g yarn
```

3. Run this command inside root folder for install node depedencies

```
yarn
```

4. Run this command after installing depedencies to start development

```
yarn dev
```

## Settup JSON

1. create a folder, with a name of your choice outside the FE root folder, and create a "db.json" file in that folder, and the data for db.json has been provided in the FE root in a folder called "json-file"

2. install JSON-Server and JSON Server Auth

```
yarn add -D json-server json-server-auth
```

3. run JSON-Server

```
json-server db.json -m ./node_modules/json-server-auth
```

## Folder Structure

```
root
|  public
|  file-json
+ src
|   + app
|   |   + services
|   |   - router.ts
|   |
|   + assets
|   |
|   + common
|   |   + component
|   |   + utils
|   |
|   + data
|   |   + types
|   |   - _api.ts
|   |
|   + domain
|   |   + model
|   |     - _Entity.ts
|   |   + repository
|   |     - _repository.ts
|   |
|   + features
|   - main.ts
|
- .env
- index.html
- package.json
- postcss.config.cgs
- README.md
- tailwind.config.js
- vite.config.ts
```
