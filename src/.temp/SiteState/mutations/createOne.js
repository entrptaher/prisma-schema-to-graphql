const { mutationField, arg } = require('@nexus/schema')

const SiteStateCreateOneMutation = mutationField('createOneSiteState', {
  type: 'SiteState',
  nullable: false,
  args: {
    data: arg({
      type: 'SiteStateCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.siteState.create({
      data,
      ...select,
    })
  },
})
module.exports = { SiteStateCreateOneMutation }
