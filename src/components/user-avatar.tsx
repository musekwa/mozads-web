import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

function UserAvatar() {
  return (
    <Link href="/dashboard/profile" className=" flex  items-center gap-2 p-3 rounded-md  hover:scale-95 transition-all duration-300">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
      <h2 className="text-sm font-bold">John Doe</h2>
      <p className="text-sm text-gray-600">@john.doe | 850990328</p>
      </div>
    </Link>
  );
}

export default UserAvatar;
