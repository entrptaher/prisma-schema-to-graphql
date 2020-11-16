const { mutationField, arg } = require('@nexus/schema')

const SiteDeleteOneMutation = mutationField('deleteOneSite', {
  type: 'Site',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.site.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SiteDeleteOneMutation }
