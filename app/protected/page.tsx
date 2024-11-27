import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-primary/10 text-primary text-lg p-4 px-6 rounded-lg flex gap-4 items-center">
          <InfoIcon size="24" strokeWidth={2} />
          <div>
            <h2 className="font-semibold">Bienvenido a Lexia</h2>
            <p className="text-sm opacity-90">Estamos encantados de tenerte aquí, {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
