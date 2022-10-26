// import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';
// import imageminPngquant from 'imagemin-pngquant';
//
// const images = [
//     'static/*.png',
//     'static/assets/images/*.png',
//     'static/assets/images/avosystem/*.png',
//     'static/assets/images/partners/*.png',
//     'static/assets/images/*.jpg',
//     'static/assets/images/advantages/*.jpg',
//     'static/assets/images/advantages/*.jpg',
// ];
//
// imagemin([...images], {
//     destination: 'build/images',
//     plugins: [
//         imageminJpegtran({
//             quality: [0.6, 0.8]
//         }),
//         imageminPngquant({
//             quality: [0.6, 0.8]
//         })
//     ]
// }).then(data => console.log(data)).catch(error => console.error(error))