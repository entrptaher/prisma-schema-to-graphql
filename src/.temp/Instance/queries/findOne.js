const { queryField, arg } = require('@nexus/schema')

const InstanceFindOneQuery = queryField('findOneInstance', {
  type: 'Instance',
  nullable: true,
  args: {
    where: arg({
      type: 'InstanceWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.instance.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { InstanceFindOneQuery }
