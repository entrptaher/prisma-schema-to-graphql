const { mutationField, arg } = require('@nexus/schema')

const NavigationUpdateOneMutation = mutationField('updateOneNavigation', {
  type: 'Navigation',
  nullable: false,
  args: {
    where: arg({
      type: 'NavigationWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'NavigationUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.navigation.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { NavigationUpdateOneMutation }
