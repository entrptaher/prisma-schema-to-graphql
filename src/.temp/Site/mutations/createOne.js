const { mutationField, arg } = require('@nexus/schema')

const SiteCreateOneMutation = mutationField('createOneSite', {
  type: 'Site',
  nullable: false,
  args: {
    data: arg({
      type: 'SiteCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.site.create({
      data,
      ...select,
    })
  },
})
module.exports = { SiteCreateOneMutation }
