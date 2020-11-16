const {
  makeSchema,
  queryType,
  mutationType,
  objectType,
} = require('@nexus/schema');
const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
import path from 'path';

async function main({ basePath, output }) {
  const prismaPath = path.dirname(
    require.resolve('@prisma/client', {
      paths: [basePath],
    })
  );

  console.log(`Loading prisma client from ${prismaPath}`);

  const { PrismaClient, dmmf } = await import(prismaPath);

  // https://github.com/graphql-nexus/nexus-schema-plugin-prisma/issues/339
  const allTheThings = (obj) => {
    for (const method in obj) {
      if (typeof obj[method] === 'function') {
        obj[method]();
      }
    }
  };

  // extract all models from prisma dmmf
  const parentTypes = () => {
    const models = dmmf.mappings.modelOperations.map((e) => e.model);
    return models.map((name) =>
      objectType({
        name,
        definition(t) {
          allTheThings(t.model);
        },
      })
    );
  };

  makeSchema({
    // Where to export the data
    outputs: {
      schema: basePath + '/' + output,
    },
    // all the types to expose
    types: [
      queryType({
        definition(t) {
          allTheThings(t.crud);
        },
      }),
      mutationType({
        definition(t) {
          allTheThings(t.crud);
        },
      }),
      ...parentTypes(),
    ],
    // just few stuff to make this workaround work
    typegenAutoConfig: {
      contextType: '{ prisma: PrismaClient.PrismaClient }',
      sources: [{ source: '@prisma/client', alias: 'PrismaClient' }],
    },
    plugins: [
      nexusSchemaPrisma({
        prismaClient: new PrismaClient(),
        inputs: {
          prismaClient: prismaPath,
        },
        experimentalCRUD: true,
        shouldGenerateArtifacts: true,
      }),
    ],
  });
}

export default main;