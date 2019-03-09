module.exports = function check(str, bracketsConfig) {
    let opens = '', closes = '';
    bracketsConfig.forEach( (cfg) => {
        opens += cfg[0];
        closes += cfg[1];
    });

    let stack = [];

    for (let i in str) {
        let s = str[i];
        opn = !!~opens.indexOf(s);
        cls = !!~closes.indexOf(s);
        if (opn && cls) { // если одинаковая открывающая и закрывающая скобки
            if (s === stack[stack.length-1]) {
                stack.pop(s);
            } else {
                stack.push(s);
            }
        } else { // разные откр и закр скобки
            if (opn) {
                stack.push(s);
            } else {
                if (opens.indexOf(stack.pop()) !== closes.indexOf(s)) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
