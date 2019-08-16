/**
 * Quick and dirty script to convert a schema definition in to a GraphQL introspection.
 * Output is written to a JSON file
 */

const schemaPath = './schema.graphql'
const outputPath = './interactive-schema/introspection-result.json'
const path = require('path')

const { buildSchema, introspectionFromSchema } = require('graphql')
const { readFileSync, writeFileSync } = require('fs')

const schemaDefinition = readFileSync(path.join(__dirname, schemaPath), 'utf-8')
const introspection = introspectionFromSchema(buildSchema(schemaDefinition))
writeFileSync(path.join(__dirname, outputPath), JSON.stringify(introspection))