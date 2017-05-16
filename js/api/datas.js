const MIN = 5;
const MAX = 450;

const secure_number = num => isNaN(num) ? 7 : (num < 1) ? 7 : num;

export const getMin = () => MIN;
export const getMax = () => MAX;

export const getRandDatas = (num = 7) => {
    const datas = [];
    num = secure_number(num);
    for (var i = 0; i < num; i++) {
        datas.push(Math.floor(Math.random() * (MAX - MIN +1)) + MIN)
    }
    return datas;
}


export const getRandPointsSet = (num = 7) => {
    const datas = [];
    num = secure_number(num);
    for (var i = 0; i < num; i++) {
        datas.push([
            Math.floor(Math.random() * (MAX - MIN +1)) + MIN,
            Math.floor(Math.random() * (MAX - MIN +1)) + MIN
        ]);
    }
    return datas;
}
