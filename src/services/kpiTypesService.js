import { get } from '../utils/request'

export const getKpiTypes = async () => {
  let result = await get("kpiTypes");
  return result;
}

export const getKpiType = async (id) => {
  let result = await get("kpiTypes?id="+id);
  return result;
}
