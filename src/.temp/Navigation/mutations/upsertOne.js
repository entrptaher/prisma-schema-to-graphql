const { mutationField, arg } = require('@nexus/schema')

const NavigationUpsertOneMutation = mutationField('upsertOneNavigation', {
  type: 'Navigation',
  nullable: false,
  args: {
    where: arg({
      type: 'NavigationWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'NavigationCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'NavigationUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.navigation.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { NavigationUpsertOneMutation }
