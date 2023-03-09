setInterval(() => {
    let create_time = Math.round(new Date('2023-02-16 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function (h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second > 0) {
        time[4] = nol(second);
    }
    if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
        currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/%F0%9F%A4%A3%20%F0%9F%91%89%20%F0%9F%A4%A1-joker%E6%9C%AC%E4%BA%BA-lightgrey?style=for-the-badge&colorA=rgb(231,226,199)&colorB=rgb(52,98,151)' title='别怕失败，大不了重头再来'><div id='runtime'>" + '本站已运行 '+ time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    else {
        currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/%F0%9F%98%A2%20%20%F0%9F%A4%9A-joker%E6%98%AF%E6%88%91-lightgrey?style=for-the-badge&colorA=rgb(231,226,199)&colorB=rgb(52,98,151)' title='Time is running out'><div id='runtime'>" + '本站已运行 ' + time[0] + ' 年 ' + time[1] + ' 天 ' + '  ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);