const { queryField, arg } = require('@nexus/schema')

const AdminOptionsFindOneQuery = queryField('findOneAdminOptions', {
  type: 'AdminOptions',
  nullable: true,
  args: {
    where: arg({
      type: 'AdminOptionsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.adminOptions.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { AdminOptionsFindOneQuery }
