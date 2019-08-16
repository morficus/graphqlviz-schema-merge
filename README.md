# GraphQL Schema Visualizer

A combination of tools to help visualize your GraphQL schema. It assumes you have split your schema in to smaller, modular pieces (look at the [schema-modules](./schema-modules) directory).

## Getting started
Once you install Node.js, just run `npm install` to grab all dependencies.


## Avilable commands
* `npm run schema-viz-static`: Generate static image file (schema.png) of your schema
* `npm run schema-viz-interactive`: Generate an interactive schema explorer
* `npm run interactive-schema`: Start the interactive schema explorer


## Tools used

* GraphQLViz: https://github.com/sheerun/graphqlviz
* GraphQL Voyager: https://apis.guru/graphql-voyager/
* Merge GrpahQL Schemas: https://www.npmjs.com/package/merge-graphql-schemas