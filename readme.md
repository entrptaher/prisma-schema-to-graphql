Create schema.graphql using nexus from prisma-client. 

```js
import generator from 'prisma-schema-to-graphql';

generator({ basePath: __dirname, output: 'generated/schema.graphql' });
```

PS: The code was copied from this discussion in prisma repo. https://github.com/graphql-nexus/nexus-plugin-prisma/issues/339