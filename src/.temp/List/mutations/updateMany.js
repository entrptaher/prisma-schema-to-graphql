const { mutationField, arg } = require('@nexus/schema')

const ListUpdateManyMutation = mutationField('updateManyList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ListWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ListUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.updateMany(args)
  },
})
module.exports = { ListUpdateManyMutation }
