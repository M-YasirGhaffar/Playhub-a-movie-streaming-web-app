import { LucideMoveLeft } from "lucide-react";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";

export default function BackButton({ text }: { text?: string }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <Button
      onClick={handleBack}
      variant="ghost"
      className="flex cursor-pointer items-center text-orange-700 hover:bg-orange-500 hover:text-white"
    >
      <LucideMoveLeft />
      <p className="pl-2 text-sm leading-none">{text ?? "Back"}</p>
    </Button>
  );
}
