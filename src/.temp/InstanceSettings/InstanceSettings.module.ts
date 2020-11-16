import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { NavigationModule } from '../Navigation/Navigation.module'
import { LimitsModule } from '../Limits/Limits.module'
import { IntervalsModule } from '../Intervals/Intervals.module'

export const InstanceSettingsModule = new GraphQLModule({
  name: 'InstanceSettings',
  typeDefs,
  resolvers,
  imports: [CommonModule, NavigationModule, LimitsModule, IntervalsModule],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
