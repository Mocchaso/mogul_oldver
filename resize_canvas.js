window.onload = function() {
    var canvas_wrapper = document.getElementById("canvas_wrapper");
    var mogul_canvas = document.getElementById("mogul_canvas");
    var ctx = mogul_canvas.getContext("2d"); /* 2Dコンテキスト */
    
    function fitCanvasSize() {
        // Canvasのサイズを、クライアントサイズ(スクロールバーを除いたブラウザ内の表示領域)に合わせる
        // 参考サイト：http://maku77.github.io/js/canvas/auto-resize.html
        var x_scale = 0.8;
        var y_scale = 0.8;
        mogul_canvas.width = (document.documentElement.clientWidth - 10) * x_scale;
        mogul_canvas.height = (document.documentElement.clientHeight - 10) * y_scale;
    }

    fitCanvasSize();
    window.onresize = fitCanvasSize;
}