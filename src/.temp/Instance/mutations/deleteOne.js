const { mutationField, arg } = require('@nexus/schema')

const InstanceDeleteOneMutation = mutationField('deleteOneInstance', {
  type: 'Instance',
  nullable: true,
  args: {
    where: arg({
      type: 'InstanceWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.instance.delete({
      where,
      ...select,
    })
  },
})
module.exports = { InstanceDeleteOneMutation }
