const { mutationField, arg } = require('@nexus/schema')

const PermissionUpdateOneMutation = mutationField('updateOnePermission', {
  type: 'Permission',
  nullable: false,
  args: {
    where: arg({
      type: 'PermissionWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'PermissionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.permission.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { PermissionUpdateOneMutation }
