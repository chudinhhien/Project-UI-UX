import { get } from '../utils/request'

export const getKpis = async (kpiTypesId) => {
  let result = await get("kpi?kpiTypeId="+kpiTypesId);
  return result;
}