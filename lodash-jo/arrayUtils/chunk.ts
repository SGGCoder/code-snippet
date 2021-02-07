export function chunk(array:any[],size:number = 1):any[][]{
  const length = array.length
  const chunkSize  = Math.ceil(size) 
  if(!length || !size) return []
  const count = Math.ceil(length/chunkSize) 
  let index = 0
  const result:any[] = []
  while(index<length){
    result.push(array.slice(index,(index+=size)))
  }
  return result
}