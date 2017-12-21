class Toolkit {

    /**
     * 生成随机数组解决方案
     * @param {number} length
     * @returns {Array}
     */
    public static makeRandomArray(length: number) {
        let array = Array(length);
        for (let i = 0; i < length; i++) {
            array[i] = Math.floor(Math.random() * length);
        }
        return array;
    }

    /**
     * 快速排序
     * @param arr
     * @returns {any}
     */
    public static quickSort(arr: any): any {
        if (arr.length <= 1) { //如果数组中只有一位数，返回数组
            return arr;
        }
        let mNumIndex = Math.floor(arr.length / 2); //取基准值的下标
        let mNum = arr.splice([mNumIndex], 1)[0];  //取基准值
        let left = [];  //左边数组
        let right = []; //右边数组

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < mNum) {  //如果数组小于基准值，放在左边数组
                left.push(arr[i]);
            } else {            ///否则
                right.push(arr[i]);
            }
        }
        return Toolkit.quickSort(left).concat([mNum], Toolkit.quickSort(right)); //返回左边数组+基准值+右边数组
    }

}

export default Toolkit;