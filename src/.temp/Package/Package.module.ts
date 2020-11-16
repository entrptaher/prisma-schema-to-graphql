import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { AutoRenewModule } from '../AutoRenew/AutoRenew.module'

export const PackageModule = new GraphQLModule({
  name: 'Package',
  typeDefs,
  resolvers,
  imports: [CommonModule, AutoRenewModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
