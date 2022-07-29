import axios from 'axios';
import { AxiosPromise } from 'axios';

enum Status {
    Pending,
    Running,
    Fullfill,
    Cancel,
}

type Callback<T> = (n: T) => void | undefined;

type Api = {
    uploadApi: string;
    cancelApi: string;
    file: File;
}

export default class AxiosAbort {
    options: Api;
    status: Status;
    percent: number;
    controller: AbortController;
    successCallback: Callback<null>;
    errorCallback: Callback<null>;
    constructor(options: Api) {
        this.options = options;
        this.status = Status.Pending;
        this.percent = 0;
        this.controller = new AbortController();
    }

    sendRequest() {
      return new Promise((resolve, reject) => {
        this.status = Status.Running;
        const onProgress = (data: number): void => {
          this.percent = data;
        };
        uploadLargeFile(this.options, this.controller, onProgress)
          .then(() => {
            this.status = Status.Fullfill;
            resolve(1);
          })
          .catch(() => {
            this.status = Status.Cancel;
            reject(2);
          });
      });
    }

    then(resolve: Callback<null>, reject: Callback<null>) {
        this.successCallback = resolve;
        this.errorCallback = reject;
    }

    reloadRequset() {
      this.status = Status.Pending;
      this.percent = 0;
    }

    cancelRequest() {
      this.controller.abort();
      this.status = Status.Cancel;
    }
}

export type axiosAbort = AxiosAbort;

export function uploadLargeFile(options: Api, controller: AbortController, onProgress: Callback<number>) {
    return new Promise((resolve, reject) => {
        const { file, uploadApi, cancelApi } = options;
      let tasks: AxiosPromise[] = [];
      const chunks = slice(file);
      let progress = Array.from({ length: chunks.length }, () => 0);
      chunks.forEach((chunk, index) => {
        let fd = new FormData();
        fd.append("file", chunk);
        fd.append("chunk", String(index + 1));
        tasks.push(
          axios({
            method: "POST",
            url: uploadApi,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: fd,
            signal: controller.signal,
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              progress[index] = percentCompleted;
              const sum = progress.reduce(function (acr, cur) {
                return acr + cur;
              });
              onProgress && onProgress(sum / chunks.length);
            },
          })
        );
      });
      // 所有切片上传完毕后，do sth
      Promise.all(tasks)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
  
const MaxChunkSize = 1024 * 1024 * 5;

function slice(file: File, piece = MaxChunkSize) {
    let totalSize = file.size; // 文件总大小
    let start = 0; // 每次上传的开始字节
    let end = start + piece; // 每次上传的结尾字节
    let chunks:Blob[] = [];
    while (start < totalSize) {
      let blob:Blob = file.slice(start, end);
      chunks.push(blob);
      start = end;
      end = start + piece;
    }
    return chunks;
} 