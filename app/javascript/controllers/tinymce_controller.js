import { Controller } from "@hotwired/stimulus"
import { imagesUploadHandler } from "../utils/uploadHandler"

export default class extends Controller {
  connect() {
    tinymce.init({
        selector: "textarea.tinymce",
        // plugins: [
        //   "image",
        //   "advlist autolink lists link image charmap print preview anchor",
        //   "searchreplace visualblocks code fullscreen",
        //   "insertdatetime media table paste code help wordcount",
        // ],
        toolbar:
          "file edit view insert format tools undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | image",
        content_style: "body {font-size: 11pt; color: #374151} img {width: 50%; height: auto}",
        skin: "oxide-dark",
        automatic_uploads: true,
        images_upload_handler: imagesUploadHandler
      });
  }
  
  disconnect() {
    tinymce.activeEditor.destroy()
  }
}