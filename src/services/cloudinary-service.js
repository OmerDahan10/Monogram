export function uploadImg(file) {
    const CLOUD_NAME = 'omerdahan'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    // formData.append('file', ev.target.files[0])
    formData.append('file', file)
    formData.append('upload_preset', 'fomab9mh');

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            const elImg = document.createElement('img');
            elImg.src = res.url;
            document.body.append(elImg);
        })
        .catch(err => console.error(err))
}
