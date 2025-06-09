"use client";
import React from "react";
const chartData = [
  { month: "January", desktop: 186, mobile: 80, pc: 100 },
  { month: "February", desktop: 305, mobile: 200, pc: 100 },
  { month: "March", desktop: 237, mobile: 120, pc: 100 },
  { month: "April", desktop: 73, mobile: 190, pc: 100 },
  { month: "May", desktop: 209, mobile: 130, pc: 100 },
  { month: "June", desktop: 214, mobile: 140, pc: 100 },
];
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  pc: {
    label: "PC",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;
export default function AppChart() {
  return (
    <div className=" ">
      <h1 className=" font-medium mb-6 text-lg">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} horizontal={true} />
          <XAxis
            dataKey="month"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          <Bar dataKey="pc" fill="var(--color-pc)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
