import React, { useEffect, useRef, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faExpand } from "@fortawesome/free-solid-svg-icons";

const PdfViewer = ({ fileUrl, onUpload }) => {
  const viewerRef = useRef(null);
  const zoomPluginInstance = zoomPlugin();
  const fullScreenPluginInstance = fullScreenPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  const { EnterFullScreen } = fullScreenPluginInstance;

  useEffect(() => {
    if (viewerRef.current) {
      const { zoom } = viewerRef.current.getPluginFunctions();
      const defaultZoomLevel = 2.0; // Example: 200%
      zoom(defaultZoomLevel);
    }
  }, []);

  return (
    <div>
      <div style={{ height: "750px", minWidth: "80vw" }}>
        <div
          style={{
            paddingLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}>
          <div style={{ marginLeft: "auto" }}>
            <FontAwesomeIcon
              icon={faUpload}
              onClick={onUpload}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ZoomOutButton />
            <ZoomPopover />
            <ZoomInButton />
            <EnterFullScreen>
              {(props) => (
                <FontAwesomeIcon
                  icon={faExpand}
                  onClick={props.onClick}
                  style={{ cursor: "pointer" }}
                />
              )}
            </EnterFullScreen>
          </div>
        </div>

        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            ref={viewerRef}
            fileUrl={fileUrl}
            plugins={[zoomPluginInstance, fullScreenPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
