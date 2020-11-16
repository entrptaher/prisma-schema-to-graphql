import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { InstanceModule } from '../Instance/Instance.module'

export const SourceCodeModule = new GraphQLModule({
  name: 'SourceCode',
  typeDefs,
  resolvers,
  imports: [CommonModule, InstanceModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
