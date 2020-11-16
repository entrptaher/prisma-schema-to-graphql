const { mutationField, arg } = require('@nexus/schema')

const SiteDeleteManyMutation = mutationField('deleteManySite', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.site.deleteMany({ where })
  },
})
module.exports = { SiteDeleteManyMutation }
