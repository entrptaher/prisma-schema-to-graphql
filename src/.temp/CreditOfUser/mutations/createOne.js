const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserCreateOneMutation = mutationField('createOneCreditOfUser', {
  type: 'CreditOfUser',
  nullable: false,
  args: {
    data: arg({
      type: 'CreditOfUserCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.creditOfUser.create({
      data,
      ...select,
    })
  },
})
module.exports = { CreditOfUserCreateOneMutation }
