import Papa from "papaparse";

export function parseCsv(file: File): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results: any) => {
        resolve(results.data);
      },

      error: (error: Error) => {
        reject(error);
      },
    });
  });
}
