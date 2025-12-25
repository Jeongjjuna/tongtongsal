# vue + typescript

## 프로젝트 세팅

```bash
npm init vue@latest

npm install element-plus
```

---

# 반응형 데이터

## ref
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

## computed
- 뷰 코딩 규약상 머스태시 구문에서 계산식을 작성하는것은 가능하면 피하자.
- 계산형 속성을 템플릿 변수로 사용하려면 computed 를 활용해야한다.


## reactive
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

---

# 디렉티브

---

# 감시자
### 반응형 변수의 값 변화에 따라 특정 처리를 수행하게 해준다.
- watchEffect() : 콜백 함수 내에서 사용되는 모든 반응형 변수를 모니터링 한다. 그중 한개라도 변경되면 콜백 함수가 실행된다.
- 처음 시작할때부터 콜백함수 즉시 실행, 그리고 이후로는 상태변경때마다 실행
```
watchEffect(
    (): => {
        반응형 변수에 대응하여 실행되는 처리
    }
)
```

- watch() : 콜백 함수 내의 모든 반응형 변수가 아니라, 감시할 특정 대상을 지정하여 등록할 수 있다.
- 처음 시작할때에는 콜백함수 실행하지 않고, 상태 변경될때마다 실행
- 감새 대상 변수를 배열로 복수개 선언 가능 ex) [selectedId, inputName]
  - 그러나 이럴거면 그냥 watchEffect() 사용하는게 더 깔끔한 코드가됨
```
watch(감시 대상 반응형 변수,
    (): => {
        감시 대상이 변경되었을 때 실행되는 처리
    }
)
```

- watch() 또한 즉시실행하고 싶다면 세번째 인자에 {immediate: true} 추가
```
watch(감시 대상 반응형 변수,
    (): => {
        감시 대상이 변경되었을 때 실행되는 처리
    },
    {immediate: true}
)
```

- 변경 전/후 값을 아래 처럼 활용할 수 도 있다.
```
watch(감시 대상 반응형 변수,
    (newVal: 데이터 타입, oldVal: 데이터 타입): => {
        감시 대상이 변경되었을 때 실행되는 처리
    }
)
```

---
