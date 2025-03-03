import { useMemo } from "react";
import useWorker from "./useWorker";
import { isBrowser } from "@/util/next";

export default function useEncryptWorker<T>(
  submit: boolean,
  args: Record<string, any> | undefined
) {
  if (!isBrowser()) return [undefined, false];
  const worker = useMemo(
    () => new Worker(new URL("../encrypt.worker.ts", import.meta.url)),
    []
  );
  return useWorker<T>(submit, worker, args);
}
