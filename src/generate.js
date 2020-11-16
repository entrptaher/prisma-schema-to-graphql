// import { Generator } from '@paljs/generator';
// import { print } from 'graphql/language/printer';
// import fs from 'fs';
// import rimraf from 'rimraf';
// import { formatSdl } from 'format-graphql';

// /**
//  *
//  * @param {{ input: String, output: String }} param0
//  */
// async function main({
//   input = './prisma/schema.prisma',
//   output = './src/output.graphql',
// } = {}) {
//   const tmpDir = __dirname + '/.temp';

//   console.log('generating temporary type definations');
//   // generate all sdl
//   await new Generator(
//     { name: 'nexus', schemaPath: input },
//     { output: tmpDir, javaScript: true }
//   ).run();

//   // console.log('importing to merge');
//   // const { typeDefs } = await import(tmpDir + '/typeDefs.js');

//   // console.log('merging the typedefs');
//   // const stringDef = await print(typeDefs);

//   // // console.log('formatting sdl using format-graphql');
//   // // const formattedDef = await formatSdl(stringDef);

//   // console.log('saving to disk');
//   // await fs.writeFileSync(output, stringDef);

//   // console.log('removing temporary files');
//   // await rimraf.sync(tmpDir);
// }

// export default main;

const {
  makeSchema,
  queryType,
  mutationType,
  objectType,
} = require('@nexus/schema');
const { nexusSchemaPrisma } = require('nexus-plugin-prisma/schema');
const { PrismaClient, dmmf } = require('@prisma/client');

export default async function main() {
  const prisma = new PrismaClient();

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
    const models = dmmf.mappings.map((e) => e.model);
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
      schema: __dirname + '/generated/nexus.graphql',
      typegen: __dirname + '/generated/nexus.ts',
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
        experimentalCRUD: true,
        shouldGenerateArtifacts: true,
      }),
    ],
  });
}
