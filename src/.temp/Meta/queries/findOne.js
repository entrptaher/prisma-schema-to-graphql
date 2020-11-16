const { queryField, arg } = require('@nexus/schema')

const MetaFindOneQuery = queryField('findOneMeta', {
  type: 'Meta',
  nullable: true,
  args: {
    where: arg({
      type: 'MetaWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.meta.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { MetaFindOneQuery }
