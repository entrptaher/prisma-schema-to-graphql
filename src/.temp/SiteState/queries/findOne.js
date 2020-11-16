const { queryField, arg } = require('@nexus/schema')

const SiteStateFindOneQuery = queryField('findOneSiteState', {
  type: 'SiteState',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteStateWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.siteState.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SiteStateFindOneQuery }
