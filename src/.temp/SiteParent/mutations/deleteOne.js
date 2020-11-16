const { mutationField, arg } = require('@nexus/schema')

const SiteParentDeleteOneMutation = mutationField('deleteOneSiteParent', {
  type: 'SiteParent',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteParentWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.siteParent.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SiteParentDeleteOneMutation }
