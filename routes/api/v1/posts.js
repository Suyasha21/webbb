import { Router } from 'express';
const router = Router();
import postApi from "../../../controllers/api/v1/posts_api";
router.get('/', postsApi.index);
export default router;