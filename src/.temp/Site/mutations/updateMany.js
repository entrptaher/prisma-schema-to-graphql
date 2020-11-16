const { mutationField, arg } = require('@nexus/schema')

const SiteUpdateManyMutation = mutationField('updateManySite', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SiteUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.site.updateMany(args)
  },
})
module.exports = { SiteUpdateManyMutation }
