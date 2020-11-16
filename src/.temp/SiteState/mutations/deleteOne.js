const { mutationField, arg } = require('@nexus/schema')

const SiteStateDeleteOneMutation = mutationField('deleteOneSiteState', {
  type: 'SiteState',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteStateWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.siteState.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SiteStateDeleteOneMutation }
