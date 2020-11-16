const { queryField, arg } = require('@nexus/schema')

const PermissionFindOneQuery = queryField('findOnePermission', {
  type: 'Permission',
  nullable: true,
  args: {
    where: arg({
      type: 'PermissionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.permission.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { PermissionFindOneQuery }
