Create schema.graphql using nexus from prisma-client.

```js
import generator from 'prisma-schema-to-graphql';

generator({ basePath: __dirname, output: 'generated/schema.graphql' });
```
