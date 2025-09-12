import { Button } from "@/components/ui/buttonS";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const StickyContactButtons = () => {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };

  const handleEmail = () => {
    window.location.href = "mailto:silvaadvitalo@gmail.com";
;
  };

  const HandleInsta = () =>{
    window.open("https://www.instagram.com/adv.italo.bezerra/")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
      <Button
        onClick={handleWhatsApp}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-elegant transition-all hover:scale-110"
        size="icon"
        >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
       <Button
        onClick={HandleInsta}
        variant="hero"
       className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-elegant transition-all duration-300 hover:scale-110 hover:brightness-90"
        size="icon"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>
    </div>
  );
};

export default StickyContactButtons;