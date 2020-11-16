const { mutationField, arg } = require('@nexus/schema')

const SiteParentUpdateManyMutation = mutationField('updateManySiteParent', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteParentWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SiteParentUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.siteParent.updateMany(args)
  },
})
module.exports = { SiteParentUpdateManyMutation }
