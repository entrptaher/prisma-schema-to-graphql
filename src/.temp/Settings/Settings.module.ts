import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { AdminOptionsModule } from '../AdminOptions/AdminOptions.module'
import { InstanceSettingsModule } from '../InstanceSettings/InstanceSettings.module'
import { UiSettingsModule } from '../UiSettings/UiSettings.module'

export const SettingsModule = new GraphQLModule({
  name: 'Settings',
  typeDefs,
  resolvers,
  imports: [
    CommonModule,
    AdminOptionsModule,
    InstanceSettingsModule,
    UiSettingsModule,
  ],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
