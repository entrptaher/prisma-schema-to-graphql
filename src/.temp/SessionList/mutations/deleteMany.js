const { mutationField, arg } = require('@nexus/schema')

const SessionListDeleteManyMutation = mutationField('deleteManySessionList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SessionListWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.sessionList.deleteMany({ where })
  },
})
module.exports = { SessionListDeleteManyMutation }
