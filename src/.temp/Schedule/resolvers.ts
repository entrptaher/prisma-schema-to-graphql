import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneSchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.findOne(args)
    },
    findFirstSchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.findFirst(args)
    },
    findManySchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.findMany(args)
    },
    findManyScheduleCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.count(args)
    },
    aggregateSchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.aggregate(args)
    },
  },
  Mutation: {
    createOneSchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.create(args)
    },
    updateOneSchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.update(args)
    },
    deleteOneSchedule: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.delete(args)
    },
    upsertOneSchedule: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.upsert(args)
    },
    deleteManySchedule: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.deleteMany(args)
    },
    updateManySchedule: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).schedule.updateMany(args)
    },
  },
}
