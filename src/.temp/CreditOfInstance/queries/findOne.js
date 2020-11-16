const { queryField, arg } = require('@nexus/schema')

const CreditOfInstanceFindOneQuery = queryField('findOneCreditOfInstance', {
  type: 'CreditOfInstance',
  nullable: true,
  args: {
    where: arg({
      type: 'CreditOfInstanceWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.creditOfInstance.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { CreditOfInstanceFindOneQuery }
