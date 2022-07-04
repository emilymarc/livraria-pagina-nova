const cloudinary = require("cloudinary")
// credenciais SDK - botar no env

cloudinary.config({ 
    cloud_name: 'millycorn', 
    api_key: '566946923896824', 
    api_secret: 'mSgfiyHR0IkWVc2K-HsYeVY8yt8' 
});

//metodo que vai executar p upload no cloudnary
// esperar uma promessa
// configurar o tipo de resultado que queremos
// DOC: https://cloudinary.com/documentation/node_integration#quick_example_file_upload

exports.uploads = (file, folder) => {

    return new Promise(
        (resolve) => {
            cloudinary.uploader.upload(
                file,
                (cloudinaryReturn) => { 
                    //caso dê sucesso me retorna o resultados da promise
                    resolve({
                        imageUrl: cloudinaryReturn.url
                    }) 
                    
                },
                {
                    folder: folder,
                    resource_type: "auto"
                }
            )
        }
    )
    

}