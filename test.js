var ffmpeg = require('./ffmpeg-node.js');

var input = './720.mp4';
var output = './mov-360.mp4';
var format = '640x360';

// ffmpeg.exec(
//    ['-i', input,'-vcodec', 'libx264','-crf', '30', '-threads', '0', '-s', '640x360', '-acodec', 'copy', output],
//    function (err, out, code) {
//       console.log(err, out, code);
//    }
// );
[{format: '640x360', output: './video-360p.mp4'}, {format: '848x480', output: './video-480p.mp4'}, {format: '1280x720', output: './video-720p.mp4'} ].forEach(function(unidad){
	ffmpeg.convertMP4({
		input: './720.mp4',
		format: unidad.format,
		output: unidad.output
	}, function(err, out, code){
		console.log(err, out, code)
	});
});

