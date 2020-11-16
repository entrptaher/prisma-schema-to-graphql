const { mutationField, arg } = require('@nexus/schema')

const SiteParentDeleteManyMutation = mutationField('deleteManySiteParent', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteParentWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.siteParent.deleteMany({ where })
  },
})
module.exports = { SiteParentDeleteManyMutation }
