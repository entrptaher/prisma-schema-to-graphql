const { queryField, arg } = require('@nexus/schema')

const SiteFindOneQuery = queryField('findOneSite', {
  type: 'Site',
  nullable: true,
  args: {
    where: arg({
      type: 'SiteWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.site.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SiteFindOneQuery }
