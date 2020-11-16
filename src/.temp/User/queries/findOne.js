const { queryField, arg } = require('@nexus/schema')

const UserFindOneQuery = queryField('findOneUser', {
  type: 'User',
  nullable: true,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.user.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { UserFindOneQuery }
