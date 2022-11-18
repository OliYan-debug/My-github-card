import React from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";

function DownloadBtn(props) {
  function downloadImg() {
    toPng(props.card).then(function (dataUrl) {
      download(dataUrl, "my-github-card.png");
    });
  }

  return(
    <div className="text-center mb-3">
      <button className="btn btn-success text" onClick={downloadImg}>Download</button>
    </div>
  )
}

export default DownloadBtn;
