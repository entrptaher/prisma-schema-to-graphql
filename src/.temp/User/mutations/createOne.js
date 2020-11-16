const { mutationField, arg } = require('@nexus/schema')

const UserCreateOneMutation = mutationField('createOneUser', {
  type: 'User',
  nullable: false,
  args: {
    data: arg({
      type: 'UserCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.user.create({
      data,
      ...select,
    })
  },
})
module.exports = { UserCreateOneMutation }
