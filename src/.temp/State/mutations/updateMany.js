const { mutationField, arg } = require('@nexus/schema')

const StateUpdateManyMutation = mutationField('updateManyState', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'StateWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'StateUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.state.updateMany(args)
  },
})
module.exports = { StateUpdateManyMutation }
