const { mutationField, arg } = require('@nexus/schema')

const SiteParentCreateOneMutation = mutationField('createOneSiteParent', {
  type: 'SiteParent',
  nullable: false,
  args: {
    data: arg({
      type: 'SiteParentCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.siteParent.create({
      data,
      ...select,
    })
  },
})
module.exports = { SiteParentCreateOneMutation }
