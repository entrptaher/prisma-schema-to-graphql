import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { RetryModule } from '../Retry/Retry.module'

export const NavigationModule = new GraphQLModule({
  name: 'Navigation',
  typeDefs,
  resolvers,
  imports: [CommonModule, RetryModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
