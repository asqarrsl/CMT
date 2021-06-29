const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const materialController = require("../controllers/material");
const { isLoggedIn, isAuthor } = require("../middleware");

const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
// const upload = multer({dest:'u ploads/'})

router
  .route("/")
  .get(catchAsync(materialController.index))
  .post(catchAsync(materialController.store));
// .post(isLoggedIn,upload.array('image'),catchAsync(materialController.store));

// router.get('/new',isLoggedIn,materialController.create);

router
  .route("/:id")
  .get(catchAsync(materialController.show))
  .put(catchAsync(materialController.update))
  // .put(isLoggedIn,isAuthor,upload.array('image'),catchAsync(materialController.update))
  .delete(isLoggedIn, isAuthor, catchAsync(materialController.delete));

// router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(materialController.edit));

module.exports = router;
