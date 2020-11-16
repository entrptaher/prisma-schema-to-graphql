import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOnePackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.findOne(args)
    },
    findFirstPackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.findFirst(args)
    },
    findManyPackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.findMany(args)
    },
    findManyPackageCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.count(args)
    },
    aggregatePackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.aggregate(args)
    },
  },
  Mutation: {
    createOnePackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.create(args)
    },
    updateOnePackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.update(args)
    },
    deleteOnePackage: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.delete(args)
    },
    upsertOnePackage: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.upsert(args)
    },
    deleteManyPackage: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.deleteMany(args)
    },
    updateManyPackage: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).package.updateMany(args)
    },
  },
}
