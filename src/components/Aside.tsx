import { UnitAhead } from "./UnitAhead"

export const Aside=(unitHeaders:string[])=>{
  const listAhead=(unitHeaders: string[])=>{
     return unitHeaders.map(item=>item)
  }
  return(<>listAhead(unitHeaders)</>)
}
