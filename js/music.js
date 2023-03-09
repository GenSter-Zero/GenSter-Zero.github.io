$(function () {
    //获取当前页面播放器类型
    var type = $('#aplayerType').val();
    if (type == 'mini') {
        playerOption.mini = true;
    } else if (type == 'fixed') {
        playerOption.fixed = true;
    }
    //加载播放列表
    $.ajax({
        type: 'post',
        url: 'http://120.78.206.50/getPlayList',
        data: {
            listId: $('#listId').val()
        },
        success: function (res) {
            playerOption.audio = res;
            //初始化播放器
            var ap = new APlayer(playerOption);
        },
        error: function () {
            alert('获取歌单信息失败！');
        }
    });
});

var playerOption = {
    container: document.getElementById('aplayer'),
    mini: false,
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: []
};