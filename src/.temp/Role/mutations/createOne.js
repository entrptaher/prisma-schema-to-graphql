const { mutationField, arg } = require('@nexus/schema')

const RoleCreateOneMutation = mutationField('createOneRole', {
  type: 'Role',
  nullable: false,
  args: {
    data: arg({
      type: 'RoleCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.role.create({
      data,
      ...select,
    })
  },
})
module.exports = { RoleCreateOneMutation }
