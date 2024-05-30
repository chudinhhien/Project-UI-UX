import { get } from '../utils/request'

export const getKpis = async () => {
  let result = await get();
  return result;
}