const { queryField, arg } = require('@nexus/schema')

const PushSubFindOneQuery = queryField('findOnePushSub', {
  type: 'PushSub',
  nullable: true,
  args: {
    where: arg({
      type: 'PushSubWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.pushSub.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { PushSubFindOneQuery }
