const { mutationField, arg } = require('@nexus/schema')

const SiteStateUpdateManyMutation = mutationField('updateManySiteState', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SiteStateWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SiteStateUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.siteState.updateMany(args)
  },
})
module.exports = { SiteStateUpdateManyMutation }
