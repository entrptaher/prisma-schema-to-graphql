const { mutationField, arg } = require('@nexus/schema')

const InstanceUpdateManyMutation = mutationField('updateManyInstance', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'InstanceWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'InstanceUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.instance.updateMany(args)
  },
})
module.exports = { InstanceUpdateManyMutation }
