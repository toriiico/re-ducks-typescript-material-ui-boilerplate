[![CircleCI](https://circleci.com/gh/toriiico/re-ducks-typescript-material-ui-boilerplate/tree/master.svg?style=svg&circle-token=06dbf3564058a70e10cc00314540cc13f44ecfdd)](https://circleci.com/gh/toriiico/re-ducks-typescript-material-ui-boilerplate/tree/master)

# Re-ducks Typescript with Material-UI (and Formik) boilerplate

This project is based on [toriiico/re-ducks-typescript-boilerplate](https://github.com/toriiico/re-ducks-typescript-boilerplate).

![Todos Page](https://user-images.githubusercontent.com/43000286/54735181-ddaad600-4be7-11e9-8351-1565d66a6d2b.png)

If you do not like Material-UI, please use [toriiico/re-ducks-typescript-boilerplate](https://github.com/toriiico/re-ducks-typescript-boilerplate).

## Features

### _Re-ducks design pattern_

It is a design pattern used in this project.  
[Project structure](#project-structure) or [this article](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) for details such as design philosophy Please watch.

### _Typescript_

### \_Material-UI framework

It is a UI framework that can easily apply Material design with React.

### _Formik & Yup_

Formik is a library that makes dealing with React's Form easier.  
We also leave Form validation by Formik to the Yup library.  
This makes it easy to implement the validation function.

### _Create-React-App_

A library that generates React environment automatically.  
The project is created from the state where `--typescript` option is applied.

### _typesafe-actions_

action A library to make type safety around.  
It also eliminates 'types.ts' files from the traditional Re-ducks pattern, making it less likely to create a trap between action and reducer.

### _reselect_

A library that plays a role in monitoring the state update and separating the role of the state <=> view.  
Used in Re-ducks 'selector'.  
If you want to improve memorization and cache management, you can also consider introducing [re-reselect](https://github.com/toomuchdesign/re-reselect).

### _Prettier & tslint_

We are forcing format and coding rules in Prettier and tslint.  
In this project, the setting of vs code is included, so for users using vs code, Prettier will operate and code format will be applied automatically each time you save.  
tslint applies automatic correction by adding [Extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin).

## Develop Environment

- OS
  - Ubuntu 18.04.1 LTS
- node
  - v11.8.0
- npm
  - 6.5.0

<a id="project-structure"></a>

## Project structure

### src directory structure

```txt
/states         -- handling states layer
  /ducks          -- directory for each state layer
    /app            -- App-wide state
    /todos          -- Todos state
/views          -- handles drawing layer
  /components     -- Component group layer
    /common         -- Core components(Header, Footer...)
    /todos
  /containers     -- connects components that require close cooperation with Redux layer
    /todos
  /pages          -- organize content in page units layer. Synchronized with URI
    /todo
  /routers        -- Routing setting layer
```

### それぞれの役割について

#### states ディレクトリ

- /ducks

  - Layer for defining states.  
    The overview of the state is as follows, and the root of the state and folders under ducks are basically synchronized.

  ```txt
  (ducks/app)
  - appState
    - appInfo
      - title

  (ducks/todos)
  - todosState
    - todos[]
      - todo
        - id
        - text
        - completed
    - visibilityFilter
  ```

- ducks/\[other\]
  - index.ts
  - selectors.ts
    - Helper functions to get values ​​from the state that ducks/\[other\] is responsible.  
      It is possible to call from outside.
  - operations.ts
    - Helper functions to process received data and dispatch an action.  
      It is possible to call from outside.
  - models.ts
    - A file for type definition for each process.  
      It is possible to refer from the outside.
  - actions.ts
    - A place to define pure actions using typesafe-actions.  
      Basically, it is treated as a place where only action is defined, and processing of data is not performed in principle.
  - reducers.ts
    - A common reducer for use with react redux.
  - constants.ts
    - A place to handle constants used in ducks/\[other\].
  - \[any.ts\]
    - It is possible to increase files as needed. (Such as apis.ts to manage api connections)

#### views ディレクトリ

- ./index.ts
- ./component.tsx
  - Files that define the screen layout of the app.  
    index.ts functions as a container.
- /routers
  - A layer to manage routing using react-router-dom.
- /pages
  - A layer to organize content in page units.  
    Synchronized with the URI makes it easier to manage components on a page-by-page basis.  
    The file structure under pages is the same as the layout definition file, and is configured with index.ts (container) and component.tsx.
- /components
  - A layer that deals with pure components.
- /containers
  - Serves as a relay object for connecting Redux to components.  
    There is no direct handling of components within the container to clarify the role.

## Start Todos App

```bash
git clone https://github.com/toriiico/re-ducks-typescript-material-ui-boilerplate.git

cd re-ducks-typescript-material-ui-boilerplate
npm i && npm start
```

## License

This project is licensed under the MIT license, Copyright (c) 2019 Ryosuke Narita.
For more information see `./LICENSE`.
