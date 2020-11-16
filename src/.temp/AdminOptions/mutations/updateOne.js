const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsUpdateOneMutation = mutationField('updateOneAdminOptions', {
  type: 'AdminOptions',
  nullable: false,
  args: {
    where: arg({
      type: 'AdminOptionsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'AdminOptionsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.adminOptions.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { AdminOptionsUpdateOneMutation }
