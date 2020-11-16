const { mutationField, arg } = require('@nexus/schema')

const SiteParentUpdateOneMutation = mutationField('updateOneSiteParent', {
  type: 'SiteParent',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteParentWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SiteParentUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.siteParent.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SiteParentUpdateOneMutation }
