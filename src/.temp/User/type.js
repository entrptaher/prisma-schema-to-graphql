const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('email', { nullable: false })
    t.string('password', { nullable: false })
    t.string('firstName', { nullable: false })
    t.string('lastName', { nullable: false })
    t.field('role', {
      nullable: false,
      type: 'Role',
      resolve(root) {
        return root.role
      },
    })
    t.string('avatar', { nullable: true })
    t.field('stripeCreds', {
      nullable: true,
      type: 'StripeCreds',
      resolve(root) {
        return root.stripeCreds
      },
    })
    t.string('pushSub', { nullable: true })
    t.field('instances', {
      nullable: false,
      list: [true],
      type: 'Instance',
      args: {
        where: 'InstanceWhereInput',
        orderBy: 'InstanceOrderByInput',
        cursor: 'InstanceWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InstanceDistinctFieldEnum',
      },
      resolve(root) {
        return root.instances
      },
    })
    t.field('proxies', {
      nullable: false,
      list: [true],
      type: 'Proxy',
      args: {
        where: 'ProxyWhereInput',
        orderBy: 'ProxyOrderByInput',
        cursor: 'ProxyWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProxyDistinctFieldEnum',
      },
      resolve(root) {
        return root.proxies
      },
    })
    t.string('recaptchaKey', { nullable: true })
    t.field('credit', {
      nullable: true,
      type: 'CreditOfUser',
      resolve(root) {
        return root.credit
      },
    })
    t.boolean('enabled', { nullable: true })
    t.field('package', {
      nullable: true,
      type: 'Package',
      resolve(root) {
        return root.package
      },
    })
    t.field('orders', {
      nullable: false,
      list: [true],
      type: 'Order',
      args: {
        where: 'OrderWhereInput',
        orderBy: 'OrderOrderByInput',
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderDistinctFieldEnum',
      },
      resolve(root) {
        return root.orders
      },
    })
    t.field('activities', {
      nullable: false,
      list: [true],
      type: 'Activity',
      args: {
        where: 'ActivityWhereInput',
        orderBy: 'ActivityOrderByInput',
        cursor: 'ActivityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ActivityDistinctFieldEnum',
      },
      resolve(root) {
        return root.activities
      },
    })
    t.field('key', {
      nullable: true,
      type: 'Key',
      resolve(root) {
        return root.key
      },
    })
    t.boolean('emailVerified', { nullable: true })
    t.string('emailToken', { nullable: true })
    t.float('emailTokenExpiry', { nullable: true })
    t.string('resetToken', { nullable: true })
    t.float('resetTokenExpiry', { nullable: true })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('googleAuth', {
      nullable: true,
      type: 'GoogleAuth',
      resolve(root) {
        return root.googleAuth
      },
    })
    t.field('notifications', {
      nullable: false,
      list: [true],
      type: 'Notification',
      args: {
        where: 'NotificationWhereInput',
        orderBy: 'NotificationOrderByInput',
        cursor: 'NotificationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'NotificationDistinctFieldEnum',
      },
      resolve(root) {
        return root.notifications
      },
    })
    t.field('List', {
      nullable: false,
      list: [true],
      type: 'List',
      args: {
        where: 'ListWhereInput',
        orderBy: 'ListOrderByInput',
        cursor: 'ListWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ListDistinctFieldEnum',
      },
      resolve(root) {
        return root.List
      },
    })
    t.string('roleId', { nullable: false })
    t.string('stripeCredsId', { nullable: true })
    t.string('creditOfUserId', { nullable: true })
    t.string('packageId', { nullable: true })
    t.string('keyId', { nullable: true })
    t.string('googleAuthId', { nullable: true })
  },
})

module.exports = { User }
