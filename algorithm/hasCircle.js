// 快慢指针算法（龟兔赛跑）
var hasCycle = function (head) {
  let start1 = head;
  let start2 = head.next;

  let hasCycle = false

  while (start1 != null && start2 != null) {
    start1 = start1.next

    if(!start1){
      break
    }


    
    start2 = start2.next
    if(!start2){
      break
    }
    start2 = start2.next
    if(start1 == start2){
      hasCycle = true
      break
    }
  }
  return hasCycle
};
