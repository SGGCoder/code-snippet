export function difference(array:any[],offArray:any[]):any[]{
  const result:any[] = []
  array.forEach(item=>{
    if(offArray.indexOf(item)<0)
    result.push(item)
  })
  return result
}