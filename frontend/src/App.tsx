import { useState } from "react";
import { useEffect } from "react";

import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

async function getTotalSpent() {
   const res = await api.expenses["total-spent"].$get();
   if (!res.ok) {
      throw new Error("Server error");
   }
   const data = await res.json();
   return data;
}

function App() {
   const { isPending, error, data } = useQuery({
      queryKey: ["get-total-spent"],
      queryFn: getTotalSpent,
   });

   if (error) {
      return <div>Error: {error.message}</div>;
   }

   return (
      <Card className="w-[350px] m-auto">
         <CardHeader>
            <CardTitle>Total spent</CardTitle>
            <CardDescription>The total amount you've spent</CardDescription>
         </CardHeader>
         <CardContent>
            {isPending ? "Loading..." : data?.totalSpent}
         </CardContent>
      </Card>
   );
}

export default App;
