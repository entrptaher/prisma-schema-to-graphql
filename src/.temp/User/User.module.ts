import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { addSelect } from '../common/addSelect'
import { CommonModule } from '../common/common.module'
import { RoleModule } from '../Role/Role.module'
import { StripeCredsModule } from '../StripeCreds/StripeCreds.module'
import { CreditOfUserModule } from '../CreditOfUser/CreditOfUser.module'
import { PackageModule } from '../Package/Package.module'
import { KeyModule } from '../Key/Key.module'
import { GoogleAuthModule } from '../GoogleAuth/GoogleAuth.module'

export const UserModule = new GraphQLModule({
  name: 'User',
  typeDefs,
  resolvers,
  imports: [
    CommonModule,
    RoleModule,
    StripeCredsModule,
    CreditOfUserModule,
    PackageModule,
    KeyModule,
    GoogleAuthModule,
  ],
  resolversComposition: {
    Query: [addSelect],
    Mutation: [addSelect],
  },
})
