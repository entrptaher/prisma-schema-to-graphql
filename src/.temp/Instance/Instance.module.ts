import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { UserModule } from '../User/User.module'
import { MetaModule } from '../Meta/Meta.module'
import { StateModule } from '../State/State.module'
import { DynamicStatsModule } from '../DynamicStats/DynamicStats.module'
import { PreservedDataModule } from '../PreservedData/PreservedData.module'
import { SessionModule } from '../Session/Session.module'
import { GoogleSheetModule } from '../GoogleSheet/GoogleSheet.module'
import { ScheduleModule } from '../Schedule/Schedule.module'

export const InstanceModule = new GraphQLModule({
  name: 'Instance',
  typeDefs,
  resolvers,
  imports: [
    CommonModule,
    UserModule,
    MetaModule,
    StateModule,
    DynamicStatsModule,
    PreservedDataModule,
    SessionModule,
    GoogleSheetModule,
    ScheduleModule,
  ],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
