const { mutationField, arg } = require('@nexus/schema')

const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: 'User',
  nullable: false,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'UserUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.user.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { UserUpdateOneMutation }
