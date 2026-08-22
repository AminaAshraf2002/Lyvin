import { Jimp } from 'jimp';

async function removeBg() {
  try {
    const imagePath = './public/assets/doctor_ok_cutout.png';
    const image = await Jimp.read(imagePath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Set Alpha to 0
      }
    });
    
    await image.write('./public/assets/doctor_ok_cutout.png');
    console.log("Background removed!");
  } catch (err) {
    console.error(err);
  }
}
removeBg();
