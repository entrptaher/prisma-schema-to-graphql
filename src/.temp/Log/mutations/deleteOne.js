const { mutationField, arg } = require('@nexus/schema')

const LogDeleteOneMutation = mutationField('deleteOneLog', {
  type: 'Log',
  nullable: true,
  args: {
    where: arg({
      type: 'LogWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.log.delete({
      where,
      ...select,
    })
  },
})
module.exports = { LogDeleteOneMutation }
