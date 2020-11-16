const { mutationField, arg } = require('@nexus/schema')

const StateDeleteManyMutation = mutationField('deleteManyState', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'StateWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.state.deleteMany({ where })
  },
})
module.exports = { StateDeleteManyMutation }
