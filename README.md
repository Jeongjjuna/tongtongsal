# vue + typescript

### 프로젝트 세팅

```bash
npm init vue@latest

npm install element-plus
```

### ref
- ref 를 이용해 변수를 선언하면, template 블럭에서 머스태시 구문을 사용하여 사용할 수 있다.
- ref 의 상태값을 바꾸면, 화면에 표시 내용이 자동으로 바뀐다.(반응형 시스템)
```vue
<script setup lang="ts">
  import {ref} from "vue";
  const myName = ref("홍길동");

  function updateName(newName : string) {
    myName.value = newName;
  }
</script>
```

### computed
- 뷰 코딩 규약상 머스태시 구문에서 계산식을 작성하는것은 가능하면 피하자.
- 계산형 속성을 템플릿 변수로 사용하려면 computed 를 활용해야한다.


### reactive
- 여러개의 데이터를 묶어서 하나의 객체로 취급하여 반응형으로 만든다.

```vue
<script setup lang="ts">
  import {computed, reactive} from "vue";

  const data = reactive({
    PI: 3.14,
    radius: Math.round(Math.random() * 10)
  });

  const area = computed(
      (): number => {
        return data.radius * data.radius * data.PI;
      }
  );
</script>
```
