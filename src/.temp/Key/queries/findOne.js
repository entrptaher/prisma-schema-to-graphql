const { queryField, arg } = require('@nexus/schema')

const KeyFindOneQuery = queryField('findOneKey', {
  type: 'Key',
  nullable: true,
  args: {
    where: arg({
      type: 'KeyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.key.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { KeyFindOneQuery }
