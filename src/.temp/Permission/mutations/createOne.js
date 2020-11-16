const { mutationField, arg } = require('@nexus/schema')

const PermissionCreateOneMutation = mutationField('createOnePermission', {
  type: 'Permission',
  nullable: false,
  args: {
    data: arg({
      type: 'PermissionCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.permission.create({
      data,
      ...select,
    })
  },
})
module.exports = { PermissionCreateOneMutation }
