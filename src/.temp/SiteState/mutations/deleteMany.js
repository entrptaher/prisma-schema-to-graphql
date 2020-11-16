const { mutationField, arg } = require('@nexus/schema')

const SiteStateDeleteManyMutation = mutationField('deleteManySiteState', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteStateWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.siteState.deleteMany({ where })
  },
})
module.exports = { SiteStateDeleteManyMutation }
