import React from "react";
import useSWR from "swr";

interface pageProps {}

export const page: React.FC<pageProps> = ({}) => {
  const { data, error }: any = useSWR("/api/user", fetch);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <ul>
      {data.user.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
