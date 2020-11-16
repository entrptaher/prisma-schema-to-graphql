const { mutationField, arg } = require('@nexus/schema')

const KeyUpdateManyMutation = mutationField('updateManyKey', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'KeyWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'KeyUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.key.updateMany(args)
  },
})
module.exports = { KeyUpdateManyMutation }
