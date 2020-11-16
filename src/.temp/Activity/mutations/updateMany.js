const { mutationField, arg } = require('@nexus/schema')

const ActivityUpdateManyMutation = mutationField('updateManyActivity', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ActivityWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ActivityUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.activity.updateMany(args)
  },
})
module.exports = { ActivityUpdateManyMutation }
