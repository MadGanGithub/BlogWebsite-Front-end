import multer from "multer";
import {GridFsStorage} from "multer-gridfs-storage";

const url="";

const storage=new GridFsStorage({url});
const upload=multer({storage});

export default upload;