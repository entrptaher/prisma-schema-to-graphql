const { queryField, arg } = require('@nexus/schema')

const RoleFindOneQuery = queryField('findOneRole', {
  type: 'Role',
  nullable: true,
  args: {
    where: arg({
      type: 'RoleWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.role.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { RoleFindOneQuery }
