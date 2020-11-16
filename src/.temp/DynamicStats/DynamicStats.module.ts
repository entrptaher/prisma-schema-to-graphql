import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { InstanceModule } from '../Instance/Instance.module'
import { ListModule } from '../List/List.module'

export const DynamicStatsModule = new GraphQLModule({
  name: 'DynamicStats',
  typeDefs,
  resolvers,
  imports: [CommonModule, InstanceModule, ListModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
