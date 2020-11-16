const { queryField, arg } = require('@nexus/schema')

const CreditOfUserFindOneQuery = queryField('findOneCreditOfUser', {
  type: 'CreditOfUser',
  nullable: true,
  args: {
    where: arg({
      type: 'CreditOfUserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.creditOfUser.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { CreditOfUserFindOneQuery }
