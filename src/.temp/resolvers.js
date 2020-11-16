const { StripeCreds } = require('./StripeCreds/resolvers')
const { Activity } = require('./Activity/resolvers')
const { CreditOfUser } = require('./CreditOfUser/resolvers')
const { Key } = require('./Key/resolvers')
const { PushSub } = require('./PushSub/resolvers')
const { Notification } = require('./Notification/resolvers')
const { GoogleAuth } = require('./GoogleAuth/resolvers')
const { User } = require('./User/resolvers')
const { Role } = require('./Role/resolvers')
const { Permission } = require('./Permission/resolvers')
const { Proxy } = require('./Proxy/resolvers')
const { AutoRenew } = require('./AutoRenew/resolvers')
const { Package } = require('./Package/resolvers')
const { Order } = require('./Order/resolvers')
const { Row } = require('./Row/resolvers')
const { List } = require('./List/resolvers')
const { Schedule } = require('./Schedule/resolvers')
const { GoogleSheet } = require('./GoogleSheet/resolvers')
const { Screenshot } = require('./Screenshot/resolvers')
const { CreditOfInstance } = require('./CreditOfInstance/resolvers')
const { PreservedData } = require('./PreservedData/resolvers')
const { SiteState } = require('./SiteState/resolvers')
const { SiteParent } = require('./SiteParent/resolvers')
const { Site } = require('./Site/resolvers')
const { Meta } = require('./Meta/resolvers')
const { DynamicStats } = require('./DynamicStats/resolvers')
const { State } = require('./State/resolvers')
const { SourceCode } = require('./SourceCode/resolvers')
const { Log } = require('./Log/resolvers')
const { Session } = require('./Session/resolvers')
const { SessionList } = require('./SessionList/resolvers')
const { Instance } = require('./Instance/resolvers')
const { UiSettings } = require('./UiSettings/resolvers')
const { Intervals } = require('./Intervals/resolvers')
const { Limits } = require('./Limits/resolvers')
const { Retry } = require('./Retry/resolvers')
const { Navigation } = require('./Navigation/resolvers')
const { InstanceSettings } = require('./InstanceSettings/resolvers')
const { AdminOptions } = require('./AdminOptions/resolvers')
const { Settings } = require('./Settings/resolvers')

const resolvers = [
  Settings,
  AdminOptions,
  InstanceSettings,
  Navigation,
  Retry,
  Limits,
  Intervals,
  UiSettings,
  Instance,
  SessionList,
  Session,
  Log,
  SourceCode,
  State,
  DynamicStats,
  Meta,
  Site,
  SiteParent,
  SiteState,
  PreservedData,
  CreditOfInstance,
  Screenshot,
  GoogleSheet,
  Schedule,
  List,
  Row,
  Order,
  Package,
  AutoRenew,
  Proxy,
  Permission,
  Role,
  User,
  GoogleAuth,
  Notification,
  PushSub,
  Key,
  CreditOfUser,
  Activity,
  StripeCreds,
]

module.exports = { resolvers }
