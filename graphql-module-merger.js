/**
 * Takes  all GraphQL schema modules in `/src/graphql-schema-modules` and produces a combined schema.graphql file
 * @type {module:path}
 */

// path must be relative to the project root
const schemaModuleDir = './schema-modules'
const path = require('path')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const { writeFileSync } = require('fs')
const warningBanner = `###################################
### THIS FILE IS AUTO-GENERATED ###
# Any changes made to this file won't actually affect the schema.
# Instead look at the content of the "graphql-schema-modules" directory.
################################### `

const typesArray = fileLoader(path.join(__dirname, schemaModuleDir))
let typeDefs = mergeTypes(typesArray, { all: true })

typeDefs = `${warningBanner} \n\n\n ${typeDefs}`

writeFileSync('schema.graphql', typeDefs)
console.log('Merge schema has been written to schema.graphql')