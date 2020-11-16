const { mutationField, arg } = require('@nexus/schema')

const NavigationCreateOneMutation = mutationField('createOneNavigation', {
  type: 'Navigation',
  nullable: false,
  args: {
    data: arg({
      type: 'NavigationCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.navigation.create({
      data,
      ...select,
    })
  },
})
module.exports = { NavigationCreateOneMutation }
