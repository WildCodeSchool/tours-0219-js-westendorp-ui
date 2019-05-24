## Structure du projet
- [Features folder](/src/app/features/README.md)
- [Core folder](/src/app/core/README.md)
- [Shared folder](/src/app/shared/README.md)
```
|-- app
     |-- features
        |-- [+] home
        |-- [+] sales
        |-- [+] profile
        |-- features.module.ts
     |-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] services
        |-- [+] header
        |-- core.module.ts
     |-- shared
        |-- [+] components
        |-- [+] directives
        |-- [+] pipes
        |-- [+] models
    ...
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server SSR

Run `npm run build:ssr && npm run serve:ssr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build SSR

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
