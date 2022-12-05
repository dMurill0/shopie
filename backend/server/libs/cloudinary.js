import {v2 as cloudinary} from "cloudinary"
cloudinary.config({
    cloud_name: "dfq0u9ikf",
    api_key: "791981185214288",
    api_secret: "kkBXBz5R670TPfKGbjP4CuHyoKY"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'shopie'
    })
}


export const deleteImage = async id => {
   return await cloudinary.uploader.destroy(id)
}