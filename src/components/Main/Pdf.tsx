import { Document, Page } from "react-pdf";
import { Pane, Spinner } from "evergreen-ui";

interface PdfProps {
  file: string;
}

export default function Pdf({ file }: PdfProps) {
  return (
    <Pane className="is-hidden-mobile" border="1px solid #474d66">
      <Document loading={<Spinner />} file={file}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          // This is 640 - 16 - 16 - 2. For a more robust solution you can probably
          // use SizeMe or AutoSizer or something similar but this is probably
          // ok for my use case. More info:
          // https://github.com/wojtekmaj/react-pdf/issues/129
          width={606}
        />
      </Document>
    </Pane>
  );
}
