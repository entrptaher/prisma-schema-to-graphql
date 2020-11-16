const { queryField, arg } = require('@nexus/schema')

const SessionFindOneQuery = queryField('findOneSession', {
  type: 'Session',
  nullable: true,
  args: {
    where: arg({
      type: 'SessionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.session.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SessionFindOneQuery }
