import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/authOption";
import Image from "next/image";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div>
      <p>{JSON.stringify(0, null, 2)}</p>
      Hello world !<Button>Hey click me</Button>
      <Input />
    </div>
  );
}
