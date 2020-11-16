const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsUpsertOneMutation = mutationField('upsertOneAdminOptions', {
  type: 'AdminOptions',
  nullable: false,
  args: {
    where: arg({
      type: 'AdminOptionsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'AdminOptionsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'AdminOptionsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.adminOptions.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { AdminOptionsUpsertOneMutation }
