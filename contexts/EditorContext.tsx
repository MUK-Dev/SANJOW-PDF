/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface EditorContextProps {
  file?: undefined;
  previewFile?: undefined;
  fName?: string;
  handleChange?: (e: any) => Promise<void>;
  showConvertModal?: boolean;
  setShowConvertModal?: Dispatch<SetStateAction<boolean>>;
  radioVal?: string;
  setRadioVal?: Dispatch<SetStateAction<string>>;
  instance?: any;
  setInstance?: Dispatch<SetStateAction<null>>;
  runDownload?: () => Promise<void>;
  isLoading?: boolean;
}

const EditorContext = createContext<EditorContextProps>({});

interface Props {
  children: ReactNode | ReactNode[];
}

export const EditorProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [file, setFile] = useState();
  const [previewFile, setPreviewFile] = useState();
  const [fName, setFName] = useState('');
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [radioVal, setRadioVal] = useState('none');
  const [instance, setInstance] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e: any) => {
    setFile(e.target.files[0]);
    setFName(e.target.files[0].name.split('.')[0]);
    const buffer = await e.target.files[0].arrayBuffer();
    const previewBuffer = await e.target.files[0].arrayBuffer();
    setFile(buffer);
    setPreviewFile(previewBuffer);
    await router.push('/editor');
  };

  const convertFunc = async (fileData: any, fileType: string) => {
    try {
      const res = await axios.post(
        'https://simplified-pdf.uc.r.appspot.com/api/convert-file',
        { filedata: fileData, outputform: fileType },
      );
      const downbutt: any = document.getElementById('hidd-down');
      if (fileType === 'docX') {
        downbutt.href = `data:application/msword;base64,${res?.data?.result?.document?.docData}`;
        downbutt.download = `${fName}.doc`;
      } else if (fileType === 'pptx') {
        downbutt.href = `data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,${res?.data?.result?.document?.docData}`;
        downbutt.download = `${fName}.pptx`;
      } else if (fileType === 'excel') {
        downbutt.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${res?.data?.result?.document?.docData}`;
        downbutt.download = `${fName}.xlsx`;
      } else {
        downbutt.href = `data:application/pdf;base64,${res?.data?.result?.document?.docData}`;
        downbutt.download = `${fName}.pdf`;
      }
      downbutt.target = '_self';
      downbutt.click();
      setShowConvertModal(false);
      setFile(undefined);
      setFName('');
      setIsLoading(false);
    } catch (e) {
      setShowConvertModal(false);
      setIsLoading(false);
    }
  };

  const runDownload = async () => {
    if (!instance) return;
    setIsLoading(true);
    instance.exportPDF().then(async (buffer: any) => {
      // const int8 = new Uint8Array(buffer);
      const blob = new Blob([buffer], { type: 'application/pdf' });
      const fileName = 'new-doc.pdf';
      const nav = window.navigator as any;
      if (nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(blob, fileName);
      } else {
        const b64 = Buffer.from(buffer).toString('base64');
        // let pdfbase64 = await btoa(String.fromCharCode.apply(null, int8 ))
        await convertFunc(b64, radioVal ?? 'none');
      }
    });
  };

  return (
    <EditorContext.Provider
      value={{
        file,
        previewFile,
        fName,
        handleChange,
        showConvertModal,
        setShowConvertModal,
        radioVal,
        setRadioVal,
        instance,
        setInstance,
        runDownload,
        isLoading,
      }}
    >
      <a style={{ display: 'none' }} id="hidd-down" />
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
