const { mutationField, arg } = require('@nexus/schema')

const SessionUpdateManyMutation = mutationField('updateManySession', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SessionWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SessionUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.session.updateMany(args)
  },
})
module.exports = { SessionUpdateManyMutation }
