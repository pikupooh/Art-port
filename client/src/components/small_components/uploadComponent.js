import React from "react";
import BlogModal from "./uploadForms/blogModal";
import PostModal from "./uploadForms/postModal";

class UploadComponent extends React.Component {
  render() {
    return (
      <div>
        <div class="fixed-action-btn">
          <a class="btn-floating btn-large red">
            <i class="large material-icons">add</i>
          </a>
          <ul>
            <li>
              <a class="btn-floating red">
                <i class="material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a class="btn-floating yellow darken-1">
                <i class="material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a class="btn-floating green modal-trigger" href="#blog-modal">
                <i class="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a class="btn-floating blue modal-trigger" href="#post-modal">
                <i class="material-icons">attach_file</i>
              </a>
            </li>
          </ul>
        </div>

        <PostModal />
        <BlogModal />
      </div>
    );
  }
}

export default UploadComponent;
