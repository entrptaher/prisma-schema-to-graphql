const { mutationField, arg } = require('@nexus/schema')

const MetaCreateOneMutation = mutationField('createOneMeta', {
  type: 'Meta',
  nullable: false,
  args: {
    data: arg({
      type: 'MetaCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.meta.create({
      data,
      ...select,
    })
  },
})
module.exports = { MetaCreateOneMutation }
