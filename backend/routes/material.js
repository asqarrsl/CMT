const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const materialController = require("../controllers/material");
const { isLoggedIn, isAuthor, authenticateJWT } = require("../middleware");

const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });


router.route('/')
    .get(catchAsync(materialController.index))
    .post(upload.fields([
            {name: "image", maxCount: 1},
            {name: "document"}
         ]),catchAsync(materialController.store));

router
  .route("/:id")
  .get(catchAsync(materialController.show))
  .put(authenticateJWT,catchAsync(materialController.update))
  .delete(authenticateJWT, catchAsync(materialController.delete));

router.post('/:id/approve',authenticateJWT,catchAsync(materialController.approve));
// router.get('/:id/aprove',isLoggedIn,isAuthor,catchAsync(materialController.approve));

module.exports = router;
