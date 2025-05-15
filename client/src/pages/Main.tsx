import {useState,useCallback} from 'react'


const Main = () => {
  const [pdfFile,setPdfFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      // TODO: upload file to backend
      console.log("PDF uploaded:", file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };
  return (
    <div className="fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <h1>How can I help you?</h1>
        <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-4 border-dashed rounded-xl p-12 w-96 text-center transition-colors ${
          dragActive ? 'border-blue-400 bg-gray-800/40' : 'border-gray-600 bg-gray-800/20'
        }`}
      >
        <p className="text-xl font-semibold mb-2">Drag & drop your PDF here</p>
        <p className="text-sm text-gray-400">or click to upload</p>
      </div>

      {pdfFile && (
        <div className="mt-6 text-green-400 text-sm">
          ✅ PDF ready: {pdfFile.name}
        </div>
      )}
    </div>
  )
}

export default Main