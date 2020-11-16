const { mutationField, arg } = require('@nexus/schema')

const MetaUpdateOneMutation = mutationField('updateOneMeta', {
  type: 'Meta',
  nullable: false,
  args: {
    where: arg({
      type: 'MetaWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'MetaUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.meta.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { MetaUpdateOneMutation }
