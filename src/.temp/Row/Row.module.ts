import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { ListModule } from '../List/List.module'

export const RowModule = new GraphQLModule({
  name: 'Row',
  typeDefs,
  resolvers,
  imports: [CommonModule, ListModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
