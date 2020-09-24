import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";

const Editor = () => {
  return (
    <div className="editor">
      <AceEditor
        mode="python"
        theme="twilight"
        name="UNIQUE_ID_OF_DIV"
        enableLiveAutocompletion={true}
        width={1022}
        height={600}
        fontSize={16}
        focus={true}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};
export default Editor;
