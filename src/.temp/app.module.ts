import { StripeCredsModule } from './StripeCreds/StripeCreds.module'
import { ActivityModule } from './Activity/Activity.module'
import { CreditOfUserModule } from './CreditOfUser/CreditOfUser.module'
import { KeyModule } from './Key/Key.module'
import { PushSubModule } from './PushSub/PushSub.module'
import { NotificationModule } from './Notification/Notification.module'
import { GoogleAuthModule } from './GoogleAuth/GoogleAuth.module'
import { UserModule } from './User/User.module'
import { RoleModule } from './Role/Role.module'
import { PermissionModule } from './Permission/Permission.module'
import { ProxyModule } from './Proxy/Proxy.module'
import { AutoRenewModule } from './AutoRenew/AutoRenew.module'
import { PackageModule } from './Package/Package.module'
import { OrderModule } from './Order/Order.module'
import { RowModule } from './Row/Row.module'
import { ListModule } from './List/List.module'
import { ScheduleModule } from './Schedule/Schedule.module'
import { GoogleSheetModule } from './GoogleSheet/GoogleSheet.module'
import { ScreenshotModule } from './Screenshot/Screenshot.module'
import { CreditOfInstanceModule } from './CreditOfInstance/CreditOfInstance.module'
import { PreservedDataModule } from './PreservedData/PreservedData.module'
import { SiteStateModule } from './SiteState/SiteState.module'
import { SiteParentModule } from './SiteParent/SiteParent.module'
import { SiteModule } from './Site/Site.module'
import { MetaModule } from './Meta/Meta.module'
import { DynamicStatsModule } from './DynamicStats/DynamicStats.module'
import { StateModule } from './State/State.module'
import { SourceCodeModule } from './SourceCode/SourceCode.module'
import { LogModule } from './Log/Log.module'
import { SessionModule } from './Session/Session.module'
import { SessionListModule } from './SessionList/SessionList.module'
import { InstanceModule } from './Instance/Instance.module'
import { UiSettingsModule } from './UiSettings/UiSettings.module'
import { IntervalsModule } from './Intervals/Intervals.module'
import { LimitsModule } from './Limits/Limits.module'
import { RetryModule } from './Retry/Retry.module'
import { NavigationModule } from './Navigation/Navigation.module'
import { InstanceSettingsModule } from './InstanceSettings/InstanceSettings.module'
import { AdminOptionsModule } from './AdminOptions/AdminOptions.module'
import { SettingsModule } from './Settings/Settings.module'
import { GraphQLModule } from '@graphql-modules/core'
import { CommonModule } from './common/common.module'

export const AppModule = new GraphQLModule({
  imports: [
    CommonModule,
    SettingsModule,
    AdminOptionsModule,
    InstanceSettingsModule,
    NavigationModule,
    RetryModule,
    LimitsModule,
    IntervalsModule,
    UiSettingsModule,
    InstanceModule,
    SessionListModule,
    SessionModule,
    LogModule,
    SourceCodeModule,
    StateModule,
    DynamicStatsModule,
    MetaModule,
    SiteModule,
    SiteParentModule,
    SiteStateModule,
    PreservedDataModule,
    CreditOfInstanceModule,
    ScreenshotModule,
    GoogleSheetModule,
    ScheduleModule,
    ListModule,
    RowModule,
    OrderModule,
    PackageModule,
    AutoRenewModule,
    ProxyModule,
    PermissionModule,
    RoleModule,
    UserModule,
    GoogleAuthModule,
    NotificationModule,
    PushSubModule,
    KeyModule,
    CreditOfUserModule,
    ActivityModule,
    StripeCredsModule,
  ],
})
