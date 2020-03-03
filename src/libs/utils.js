/**
 * @desc 公共方法
 * @author lsy
 */


/**
 * 递归(N维 ---> 一维)
 * @param {array} [arr] - 查询数组 
 * @param {array} [result] - 返回数组
 */
export function recursion(arr, result = []) {
    arr.map((item) => {
        if (item.children && item.children.length && !item.hideChildren) {
            recursion(item.children, result);
        } else {
            if (item.children && item.children.length && item.hideChildren) {
                result.push(item);
                recursion(item.children, result);
            } else {
                result.push(item);
            }
        }
    });
    return result;
}

/**
 * 获取分页栏的当前数据
 * @param {*} data ：服务端推送过来的数据
 * @param {*} param：
 *    pageSize: 每页的条数
 *    pageNo: 当前页
 *    total: 总条数
 */
export function getPaginationData(data, {pageSize, pageNo, total}) {
    let start = pageSize*(pageNo - 1)
    let end = pageSize*pageNo
    if(end > total)end = total
    let showData = []
    for(let i = start; i < end; i++){
        showData.push(data[i])
    }
    return showData
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
}