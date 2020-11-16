import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { InstanceModule } from '../Instance/Instance.module'
import { SiteParentModule } from '../SiteParent/SiteParent.module'
import { SiteStateModule } from '../SiteState/SiteState.module'

export const SiteModule = new GraphQLModule({
  name: 'Site',
  typeDefs,
  resolvers,
  imports: [CommonModule, InstanceModule, SiteParentModule, SiteStateModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
