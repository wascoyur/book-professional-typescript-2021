export const Rule17=()=>{
  function triangle(n: number) {
    const nums=[]
    for (let i = 0; i < n; i++) {
      nums.push(i)
      console.log(arraySums(nums))
    }
    return nums
  }


  return <div>{triangle(5)}</div>
}
function arraySums(arr: readonly number[]) {
  let sum=0,num
  while ((num = arr.pop()) !== undefined){
    sum+=num
  }
   return sum
}

