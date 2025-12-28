import type {InjectionKey} from "vue";
import type {Data} from "@/interfaces/Data.ts";

export const dataKeys: InjectionKey<Array<Data>> =
  Symbol("datas");