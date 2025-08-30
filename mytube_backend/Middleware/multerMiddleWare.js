import multer from "multer";

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
         const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
         const exit=file.extname(file.originalname);
         cb(null,unique+exit);
    }

})
export const upload=multer({storage:storage});