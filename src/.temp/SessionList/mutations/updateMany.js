const { mutationField, arg } = require('@nexus/schema')

const SessionListUpdateManyMutation = mutationField('updateManySessionList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SessionListWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SessionListUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sessionList.updateMany(args)
  },
})
module.exports = { SessionListUpdateManyMutation }
