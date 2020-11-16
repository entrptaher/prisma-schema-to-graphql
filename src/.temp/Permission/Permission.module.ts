import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { RoleModule } from '../Role/Role.module'

export const PermissionModule = new GraphQLModule({
  name: 'Permission',
  typeDefs,
  resolvers,
  imports: [CommonModule, RoleModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
