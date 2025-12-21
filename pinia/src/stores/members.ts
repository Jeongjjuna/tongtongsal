import {defineStore} from 'pinia'
import type {Member} from "@/interfaces/Member.ts";
import {ref} from "vue";

interface State {
  members: Map<number, Member>
}


export const useMembersStore = defineStore('member', () => {
  const members = ref<Map<number, Member>>(new Map())

  function getById(memberId: number): Member | undefined {
    return members.value.get(memberId)
  }

  function addMember(member: Member) {
    members.value.set(member.id, member)
  }

  function initMembers() {
    members.value.set(33456, {
      id: 33456,
      name: "영희",
      email: "bow@example.com",
      points: 35,
      note: "신규 가입 특전"
    })

    members.value.set(33457, {
      id: 33457,
      name: "철수",
      email: "mue@example.com",
      points: 35
    })
  }

  return {members, initMembers, addMember, getById}
});
