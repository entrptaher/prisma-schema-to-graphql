const { mutationField, arg } = require('@nexus/schema')

const InstanceDeleteManyMutation = mutationField('deleteManyInstance', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'InstanceWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.instance.deleteMany({ where })
  },
})
module.exports = { InstanceDeleteManyMutation }
