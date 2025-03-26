"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const domains = [
    {
      id: 1,
      url: "daraz.ordermade.com",
      platform: "daraz",
    },
    {
      id: 2,
      url: "foodpanda.ordermade.com",
      platform: "foodpanda",
    },
    {
      id: 3,
      url: "amazon.ordermade.com",
      platform: "amazon",
    },
  ];
  const handleSubdomain = (platform: string) => {
    router.push(`/${platform}`);
  };
  return (
    <div className="px-14 my-8">
      <h2 className="font-bold text-2xl my-6 uppercase">Subdomains</h2>
      <ul className="flex flex-col gap-y-2 font-medium text-md underline">
        {domains.map((data) => {
          return (
            <li
              className="cursor-pointer"
              key={data.id}
              onClick={() => handleSubdomain(data?.platform)}
            >
              {data.url}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
