const { StripeCreds } = require('./StripeCreds/typeDefs')
const { Activity } = require('./Activity/typeDefs')
const { CreditOfUser } = require('./CreditOfUser/typeDefs')
const { Key } = require('./Key/typeDefs')
const { PushSub } = require('./PushSub/typeDefs')
const { Notification } = require('./Notification/typeDefs')
const { GoogleAuth } = require('./GoogleAuth/typeDefs')
const { User } = require('./User/typeDefs')
const { Role } = require('./Role/typeDefs')
const { Permission } = require('./Permission/typeDefs')
const { Proxy } = require('./Proxy/typeDefs')
const { AutoRenew } = require('./AutoRenew/typeDefs')
const { Package } = require('./Package/typeDefs')
const { Order } = require('./Order/typeDefs')
const { Row } = require('./Row/typeDefs')
const { List } = require('./List/typeDefs')
const { Schedule } = require('./Schedule/typeDefs')
const { GoogleSheet } = require('./GoogleSheet/typeDefs')
const { Screenshot } = require('./Screenshot/typeDefs')
const { CreditOfInstance } = require('./CreditOfInstance/typeDefs')
const { PreservedData } = require('./PreservedData/typeDefs')
const { SiteState } = require('./SiteState/typeDefs')
const { SiteParent } = require('./SiteParent/typeDefs')
const { Site } = require('./Site/typeDefs')
const { Meta } = require('./Meta/typeDefs')
const { DynamicStats } = require('./DynamicStats/typeDefs')
const { State } = require('./State/typeDefs')
const { SourceCode } = require('./SourceCode/typeDefs')
const { Log } = require('./Log/typeDefs')
const { Session } = require('./Session/typeDefs')
const { SessionList } = require('./SessionList/typeDefs')
const { Instance } = require('./Instance/typeDefs')
const { UiSettings } = require('./UiSettings/typeDefs')
const { Intervals } = require('./Intervals/typeDefs')
const { Limits } = require('./Limits/typeDefs')
const { Retry } = require('./Retry/typeDefs')
const { Navigation } = require('./Navigation/typeDefs')
const { InstanceSettings } = require('./InstanceSettings/typeDefs')
const { AdminOptions } = require('./AdminOptions/typeDefs')
const { Settings } = require('./Settings/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { sdlInputs } = require('@paljs/plugins')

const typeDefs = mergeTypeDefs([
  sdlInputs(),
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
])

module.exports = { typeDefs }
