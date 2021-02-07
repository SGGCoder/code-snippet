/*
 * @Author: zhouyinchi
 * @Date: 2021-01-15 14:47:22
 * @LastEditTime: 2021-01-15 14:49:25
 * @LastEditors: zhouyinchi
 * @Description: 简单的状态机 ,实现大整数 是否被3整除
 * 解决方法，状态(0,1,3)：每位除以3的余数作为状态，带入下一位整数
 * 解决，各个位数之和任仍然大于js最大整数（64位，8个子节）
 */
function createFSM() {
  return {
    initail: 0,
    states: {
      0: {
        on: {
          read(ch) {
            return {
              0: 0,
              1: 1,
              2: 2,
              3: 0,
              4: 1,
              5: 2,
              6: 0,
              7: 1,
              8: 2,
              9: 0,
            }[ch];
          }
        }
      },
      1: {
        on: {
          read(ch) {
            return {
              0: 1,
              1: 2,
              2: 0,
              3: 1,
              4: 2,
              5: 0,
              6: 1,
              7: 2,
              8: 0,
              9: 1,
            }[ch];
          }
        }
      },
      2: {
        on: {
          read(ch) {
            return {
              0: 2,
              1: 0,
              2: 1,
              3: 2,
              4: 0,
              5: 1,
              6: 2,
              7: 0,
              8: 1,
              9: 2,
            }[ch];
          }
        }
      }
    }
  }
}

const fsm = createFSM()
const data_str = '281902812894839483047309573843389230298329038293829329'

let cur = fsm.initail
for (let i = 0; i < data_str.length; i++) {
  const s = data_str[i]
  if (![
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ].includes(s)) {
    console.log('illegal number')
    break
  }
  cur = fsm.states[cur].on.read(data_str[i])
}
if (cur === 0) {
  console.log('can')
}
else {
  console.log('can not')
}