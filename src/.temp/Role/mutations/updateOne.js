const { mutationField, arg } = require('@nexus/schema')

const RoleUpdateOneMutation = mutationField('updateOneRole', {
  type: 'Role',
  nullable: false,
  args: {
    where: arg({
      type: 'RoleWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'RoleUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.role.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { RoleUpdateOneMutation }
