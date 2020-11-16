const { queryField, arg } = require('@nexus/schema')

const SessionListFindOneQuery = queryField('findOneSessionList', {
  type: 'SessionList',
  nullable: true,
  args: {
    where: arg({
      type: 'SessionListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.sessionList.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SessionListFindOneQuery }
