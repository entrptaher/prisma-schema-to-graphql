const { queryField, arg } = require('@nexus/schema')

const SiteParentFindOneQuery = queryField('findOneSiteParent', {
  type: 'SiteParent',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteParentWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.siteParent.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SiteParentFindOneQuery }
