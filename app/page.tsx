import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/authOption";

export default async function Home() {
  const session = await getAuthSession();
  console.log(session);
  return (
    <div>
      <p>{JSON.stringify(session, null, 2)}</p>
      Hello world !<Button>Hey click me</Button>
      <Input />
    </div>
  );
}
