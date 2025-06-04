function gramophone(band, album, song) {
    let fullRotation = 2.5;
    let songDuration = Number((album.length * band.length) * song.length / 2);
    let totalRotations = Math.ceil(songDuration / fullRotation);
    
    console.log(`The plate was rotated ${totalRotations} times.`);
}
