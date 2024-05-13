import { get } from '../utils/request'

export const getKpiTypes = async () => {
  let result = await get("kpiTypes");
  result.map((item,id) => {
    item["value"] = item.id;
    item["label"] = item.name;
  })
  return result;
}