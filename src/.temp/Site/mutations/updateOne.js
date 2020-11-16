const { mutationField, arg } = require('@nexus/schema')

const SiteUpdateOneMutation = mutationField('updateOneSite', {
  type: 'Site',
  nullable: false,
  args: {
    where: arg({
      type: 'SiteWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SiteUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.site.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SiteUpdateOneMutation }
