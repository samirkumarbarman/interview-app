import multer from "multer";
import path from "path";

//SetUp storage
const storage = multer.diskStorage({
    destination : "./uploads/",
    filename : (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize Upload
const upload = multer({
    storage : storage,
    limits : {fileSize :5 * 1024 * 1024},
    fileFilter :(req, file, cb) =>{
        checkFileType (file, cb);
    }
});

// Check file types
function checkFileType (file, cb) {
    const fileType = /pdf/;
    const extname = fileType.test(path.extname(file.originalname).toLocaleLowerCase());
    const mimetype = mimetype.test(file.mimetype);

    if ( mimetype && extname){
        return cb(null, true);
    } else {
        cb ("error: Only pdf files are allowed");
    }
};

export default upload;

