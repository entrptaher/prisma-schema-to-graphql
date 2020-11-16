const { mutationField, arg } = require('@nexus/schema')

const PushSubUpdateManyMutation = mutationField('updateManyPushSub', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PushSubWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'PushSubUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.pushSub.updateMany(args)
  },
})
module.exports = { PushSubUpdateManyMutation }
