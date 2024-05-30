import { del, get, post } from '../utils/request'

export const getKpis = async () => {
  let result = await get("kpi");
  return result;
}

export const postKpis = async (data) => {
  let result = await post("kpi",data);
  return result;
}

export const deleteKpiById = async (id) => {
  let result = await del("kpi",id);
  return result;
}