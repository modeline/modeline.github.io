export interface BenchmarkTableProps {
  // columns: [BenchmarkTableColumn];
}

export const BenchmarkTable = (props: BenchmarkTableProps) => {
  return (
    <table className="m-2 mt-10">
      <thead>
        <tr>
          <td className="pl-2 pr-5 border-t-4 border-l-4 border-black">
            Model
          </td>
          <td className="pl-2 pr-5 border-t-4 border-black">Version</td>
          <td className="pl-2 pr-5 border-t-4 border-black">Pipeline</td>
          <td className="pl-2 pr-5 border-t-4 border-r-4 border-black">
            Device
          </td>
          <td
            colSpan={2}
            className="pl-2 pr-5 border-t-4 border-l-4 border-r-4 border-black"
          >
            Accuracy
          </td>
          <td
            colSpan={5}
            className="pl-2 pr-5 border-t-4 border-l-4 border-r-4 border-black"
          >
            Serial latency, 95th percentile
          </td>
        </tr>
        <tr>
          <td className="pl-2 pr-5 border-l-4 border-b-4 border-black"></td>
          <td className="pl-2 pr-5 border-b-4 border-black"></td>
          <td className="pl-2 pr-5 border-b-4 border-black"></td>
          <td className="pl-2 pr-5 border-r-2 border-b-4 border-black"></td>
          <td className="pl-2 pr-5 border-l-4 border-r-2 border-b-4 border-black">
            Top-1
          </td>
          <td className="pl-2 pr-5 border-l-2 border-r-4 border-b-4 border-black">
            Top-5
          </td>
          <td className="pl-2 pr-5 border-l-4 border-r-2 border-b-4 border-black">
            IO
          </td>
          <td className="pl-2 pr-5 border-l-2 border-r-2 border-b-4 border-black">
            Prep.
          </td>
          <td className="pl-2 pr-5 border-l-2 border-r-2 border-b-4 border-black">
            Infer
          </td>
          <td className="pl-2 pr-5 border-l-2 border-r-2 border-b-4 border-black">
            Post.
          </td>
          <td className="pl-2 pr-5 border-l-2 border-r-4 border-b-4 border-black">
            Total
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="border-l-4 border-r-4 border-black">
          <td
            rowSpan={1}
            className="text-left align-text-top pl-2 pr-2 pt-1 pb-1"
          >
            rwightman/mobilenetv3
          </td>
          <td
            rowSpan={1}
            className="text-left align-text-top pl-2 pr-2 pt-1 pb-1"
          >
            large_100
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1">Vision/CoreML</td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1">iPhone 12 (iOS 14)</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">68.20%</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">87.64%</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">0.42ms</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">49.46ms</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">117.89ms</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">0.14ms</td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1">167ms</td>
        </tr>
        <tr className="border-l-4 border-r-4 border-black">
          <td
            rowSpan={3}
            className="text-left align-text-top pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-4 border-black"
          >
            rwightman/efficientnet_lite
          </td>
          <td
            rowSpan={1}
            className="text-left align-text-top pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black"
          >
            lite_0
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            Vision/CoreML
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            iPhone 12 (iOS 14)
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            68.20%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            87.64%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            0.42ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            49.46ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            117.89ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            0.14ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-4 border-b-2 border-black">
            167ms
          </td>
        </tr>
        <tr className="border-l-4 border-r-4 border-black">
          <td
            rowSpan={2}
            className="text-left align-text-top pl-2 pr-2 pt-1 pb-1 border-t-2 border-b-4 border-black"
          >
            lite_2137
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            Vision/CoreML
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            iPhone 12 (iOS 14)
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            68.20%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            87.64%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            0.42ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            49.46ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            117.89ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            0.14ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-t-2 border-black">
            167ms
          </td>
        </tr>
        <tr className="border-l-4 border-r-4 border-black">
          {/* Skipping first 2 index columns (both had rowspan>1 above) */}
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            Granular/PyTorch
          </td>
          <td className="text-left pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            iPhone 12 (iOS 14)
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            68.20%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            87.64%
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            0.42ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            49.46ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            117.89ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            0.14ms
          </td>
          <td className="text-right pl-2 pr-2 pt-1 pb-1 border-b-4 border-black">
            167ms
          </td>
        </tr>
      </tbody>
    </table>
  );
};
