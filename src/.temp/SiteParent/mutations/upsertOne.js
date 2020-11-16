const { mutationField, arg } = require('@nexus/schema')

const SiteParentUpsertOneMutation = mutationField('upsertOneSiteParent', {
  type: 'SiteParent',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteParentWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SiteParentCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SiteParentUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteParent.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteParentUpsertOneMutation }
