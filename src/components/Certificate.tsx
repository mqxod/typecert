import { useRef } from "react";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface CertificateProps {
  userName: string;
  wpm: number;
  accuracy: number;
  date: string;
  certificateId: string;
}

export default function Certificate({ userName, wpm, accuracy, date, certificateId }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
      });

      const link = document.createElement('a');
      link.download = `typing-certificate-${certificateId}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast.success("Certificate downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download certificate");
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div 
        ref={certificateRef}
        className="bg-white p-12 rounded-lg border-8 border-double border-primary relative overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-accent opacity-50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-accent opacity-50"></div>

        {/* Certificate content */}
        <div className="text-center space-y-6 relative z-10">
          <div className="flex justify-center">
            <Award className="h-20 w-20 text-primary" />
          </div>
          
          <h1 className="text-5xl font-bold text-primary">
            Certificate of Achievement
          </h1>
          
          <div className="text-xl text-gray-600">
            This certifies that
          </div>
          
          <div className="text-4xl font-bold text-gray-800 border-b-2 border-gray-300 inline-block px-8 pb-2">
            {userName}
          </div>
          
          <div className="text-xl text-gray-600 max-w-2xl mx-auto">
            has successfully completed the typing proficiency test and demonstrated exceptional typing skills
          </div>
          
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{wpm}</div>
              <div className="text-sm text-gray-600">Words Per Minute</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
          </div>
          
          <div className="pt-8 space-y-2">
            <div className="text-sm text-gray-500">
              Date: {date}
            </div>
            <div className="text-xs text-gray-400">
              Certificate ID: {certificateId}
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 max-w-xs mx-auto">
            <div className="text-sm font-semibold text-gray-700">Type Master Certification</div>
            <div className="text-xs text-gray-500">Official Typing Proficiency Platform</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          variant="gradient" 
          size="lg"
          onClick={downloadCertificate}
          className="gap-2"
        >
          <Download className="h-5 w-5" />
          Download Certificate
        </Button>
      </div>
    </div>
  );
}
