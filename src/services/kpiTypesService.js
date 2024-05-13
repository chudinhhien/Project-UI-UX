import { get } from '../utils/request'

export const getKpiTypes = async () => {
  let result = await get("kpiTypes");
  return result.map((item, id) => {
    return {
      ...item,
      value: item.id,
      label: item.name
    };
  });
}
