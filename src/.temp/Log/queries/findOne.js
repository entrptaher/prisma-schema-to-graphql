const { queryField, arg } = require('@nexus/schema')

const LogFindOneQuery = queryField('findOneLog', {
  type: 'Log',
  nullable: true,
  args: {
    where: arg({
      type: 'LogWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.log.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { LogFindOneQuery }
