const { mutationField, arg } = require('@nexus/schema')

const SiteStateUpsertOneMutation = mutationField('upsertOneSiteState', {
  type: 'SiteState',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteStateWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SiteStateCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SiteStateUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteState.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteStateUpsertOneMutation }
