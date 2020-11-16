const { queryField, arg } = require('@nexus/schema')

const StateFindOneQuery = queryField('findOneState', {
  type: 'State',
  nullable: true,
  args: {
    where: arg({
      type: 'StateWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.state.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { StateFindOneQuery }
