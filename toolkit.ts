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

}

export default Toolkit;