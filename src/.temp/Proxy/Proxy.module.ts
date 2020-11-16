import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { UserModule } from '../User/User.module'
import { InstanceSettingsModule } from '../InstanceSettings/InstanceSettings.module'

export const ProxyModule = new GraphQLModule({
  name: 'Proxy',
  typeDefs,
  resolvers,
  imports: [CommonModule, UserModule, InstanceSettingsModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
