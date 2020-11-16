const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserUpdateOneMutation = mutationField('updateOneCreditOfUser', {
  type: 'CreditOfUser',
  nullable: false,
  args: {
    where: arg({
      type: 'CreditOfUserWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'CreditOfUserUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.creditOfUser.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { CreditOfUserUpdateOneMutation }
