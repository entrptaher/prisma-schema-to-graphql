const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsCreateOneMutation = mutationField('createOneAdminOptions', {
  type: 'AdminOptions',
  nullable: false,
  args: {
    data: arg({
      type: 'AdminOptionsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.adminOptions.create({
      data,
      ...select,
    })
  },
})
module.exports = { AdminOptionsCreateOneMutation }
