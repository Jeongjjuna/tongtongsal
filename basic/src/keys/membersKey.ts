import type {InjectionKey} from "vue";
import type {Member} from "@/interfaces/Member.ts";

export const membersKey: InjectionKey<Map<number, Member>> =
  Symbol("members");