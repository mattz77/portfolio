import { ClientOnly } from "@/components/client-only";
import MainContent from "@/components/main-content";

export default function Page() {
  return (
    <ClientOnly>
      <MainContent />
    </ClientOnly>
  );
}