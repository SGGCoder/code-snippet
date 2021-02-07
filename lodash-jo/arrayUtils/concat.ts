export function concat(array:any[],...args:any[]):any[]{
  let result = array
  args.forEach(v=> {
    if(v instanceof Array){
      result = [...result,...v]
    }
    else{
      result = [...result,v]
    }
  });
  return result
}