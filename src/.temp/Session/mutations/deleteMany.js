const { mutationField, arg } = require('@nexus/schema')

const SessionDeleteManyMutation = mutationField('deleteManySession', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SessionWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.session.deleteMany({ where })
  },
})
module.exports = { SessionDeleteManyMutation }
