import api from "./api"

export const getCityList = (data) => {
  return api.request({
    url: "",
    method: "get",
    params: data,
  })
}
