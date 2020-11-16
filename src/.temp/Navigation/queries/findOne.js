const { queryField, arg } = require('@nexus/schema')

const NavigationFindOneQuery = queryField('findOneNavigation', {
  type: 'Navigation',
  nullable: true,
  args: {
    where: arg({
      type: 'NavigationWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.navigation.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { NavigationFindOneQuery }
