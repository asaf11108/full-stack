

# FullStack

This is a small web app that consists of a login page and a main page that presents data in a tabular view.<br />
[Deployed App](https://asaf-nx-fe.herokuapp.com/login)

1. All `components` are in `onPush` mode.
2. This is a `monorepo` repository, using a tool [Nrwl Nx](https://nx.dev/).<br/>
One app in Angular that using libraries under libs/fe.<br/>
Other app in Nest.js that using libraries under libs/api.<br/>
    *  It enables us to run the project in different configurations. There are many examples, but here are some: if the FE and BE app are in the same repo we can share interfaces, configs... Also we can have 2 apps where one is as angular element that uses only one library and the other app uses all the libraries.<br />
    Big drawback here, is that the package json is shared between the apps,so that can lead to conflicts in the packages.
    *  It can enforce order, where one library can't access other library. For example, FE libs can't access API libs and vice versa.
    *  It can reduce the build time with Nx Cloud.<br>
3. The login is being done by [Auth0](https://auth0.com/).
 
