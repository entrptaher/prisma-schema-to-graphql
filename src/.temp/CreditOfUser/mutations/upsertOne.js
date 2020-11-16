const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserUpsertOneMutation = mutationField('upsertOneCreditOfUser', {
  type: 'CreditOfUser',
  nullable: false,
  args: {
    where: arg({
      type: 'CreditOfUserWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'CreditOfUserCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'CreditOfUserUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfUser.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { CreditOfUserUpsertOneMutation }
