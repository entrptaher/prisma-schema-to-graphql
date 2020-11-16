import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { SessionModule } from '../Session/Session.module'

export const SessionListModule = new GraphQLModule({
  name: 'SessionList',
  typeDefs,
  resolvers,
  imports: [CommonModule, SessionModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
