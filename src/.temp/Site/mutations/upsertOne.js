const { mutationField, arg } = require('@nexus/schema')

const SiteUpsertOneMutation = mutationField('upsertOneSite', {
  type: 'Site',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SiteCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SiteUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.site.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteUpsertOneMutation }
