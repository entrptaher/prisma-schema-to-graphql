const { mutationField, arg } = require('@nexus/schema')

const RoleUpsertOneMutation = mutationField('upsertOneRole', {
  type: 'Role',
  nullable: false,
  args: {
    where: arg({
      type: 'RoleWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'RoleCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'RoleUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.role.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { RoleUpsertOneMutation }
