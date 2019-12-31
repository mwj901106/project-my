import ajax from "./ajax";

// 获取左侧列表
export const reqGetShopLeftNav = () => ajax('/getshopleftNav')
// 获取女装
export const reqGetShopWoman = () => ajax('/getshopwoman')
// 获取羽绒服
export const reqGetYuRong = () => ajax('/getshopYuRong')
//获取男女内衣
export const reqGetShopUnderwear = () => ajax('/getshopUnderwear')
// 获取男装
export const reqGetShopMan = () => ajax('/getshopman')
// 大衣
export const reqGetProductList = () => ajax('/getshopbottine')