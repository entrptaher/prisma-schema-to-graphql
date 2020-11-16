import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'

export const IntervalsModule = new GraphQLModule({
  name: 'Intervals',
  typeDefs,
  resolvers,
  imports: [CommonModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
