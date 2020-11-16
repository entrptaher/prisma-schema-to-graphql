const { queryField, arg } = require('@nexus/schema')

const ActivityFindOneQuery = queryField('findOneActivity', {
  type: 'Activity',
  nullable: true,
  args: {
    where: arg({
      type: 'ActivityWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.activity.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { ActivityFindOneQuery }
