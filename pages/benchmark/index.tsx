import React from "react";
import { BenchmarkTable } from "../../components/BenchmarkTable";
import { HeaderNav } from "../../components/HeaderNav";
import { Layout } from "../../components/Layout";

export default function Home() {
  return (
    <Layout
      insideMain={
        <React.Fragment>
          <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Mobile Peformance Benchmark
          </h1>
          <BenchmarkTable />
        </React.Fragment>
      }
    />
  );
  // TODO: Integrate benchmark results explorer GUI here
}
