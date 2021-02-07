export function compact(array:any[]):any[]{
  const result:any[] = []
  array?.forEach(item=>{
    if(item)
    result.push(item)
  })
  return result
}