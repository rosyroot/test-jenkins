var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 축소 치를 포함한 매핑 된 배열의 소트
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 결과 순서를 위한 컨테이너
var result = mapped.map(function(el){
  return list[el.index];
});
