const { mutationField, arg } = require('@nexus/schema')

const PermissionUpsertOneMutation = mutationField('upsertOnePermission', {
  type: 'Permission',
  nullable: false,
  args: {
    where: arg({
      type: 'PermissionWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'PermissionCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'PermissionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.permission.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { PermissionUpsertOneMutation }
