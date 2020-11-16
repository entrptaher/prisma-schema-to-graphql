const { mutationField, arg } = require('@nexus/schema')

const SiteStateUpdateOneMutation = mutationField('updateOneSiteState', {
  type: 'SiteState',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteStateWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SiteStateUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.siteState.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SiteStateUpdateOneMutation }
