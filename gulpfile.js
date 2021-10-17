const { src, dest, series, done } = require('gulp');
const del = require('del');

function copyAllFiles() {
   return src(['./**/*', '!./frontend/**/*', '!./node_modules/**/*', '!./frontend', '!./node_modules', '!publish'])
            .pipe(dest('./publish'));
}

function cleanPublishFolder()  {
   return del('./publish/**', {force:false });
}

exports.default = series(cleanPublishFolder, copyAllFiles);
